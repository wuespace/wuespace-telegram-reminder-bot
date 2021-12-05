import TelegramBot from 'node-telegram-bot-api';
import { reminders } from './reminders.js';
import cron from 'node-cron';
import env from 'dotenv';
const config = env.config();

const token = config.parsed?.TELEGRAM_TOKEN;

if (!token)
	throw new Error(
		'No token specified in config. Expected parameter TELEGRAM_TOKEN to be present.'
	);

const bot = new TelegramBot(token, { polling: true });

bot.onText(/^\/start/, async (message) => {
	await bot.sendMessage(
		message.chat.id,
		`This is an internal use only bot. Please ask an admin to configure the bot to use the chat ID \`${message.chat.id}\` for reminders in this group.`,
		{
			parse_mode: 'Markdown',
			reply_to_message_id: message.message_id,
		}
	);
});

reminders.forEach((reminder, index) => {
	console.log(
		new Date().toISOString(),
		`Scheduling reminder #${index} with CRON "${reminder.cron}".`
	);
	cron.schedule(reminder.cron, async () => {
		console.log(
			new Date().toISOString(),
			'Sending message to',
			JSON.stringify(reminder.chatIds),
			`based on CRON #${index} (${reminder.cron}):`,
			JSON.stringify(reminder.message)
		);
		await Promise.all(
			reminder.chatIds.map((chatId) =>
				bot.sendMessage(chatId, reminder.message, {
					parse_mode: 'Markdown',
				})
			)
		);
	});
});

export {};
