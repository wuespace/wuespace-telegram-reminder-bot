import TelegramBot from 'node-telegram-bot-api';
import { reminders } from './reminders.js';
import cron from 'node-cron';
import env from 'dotenv';
const config = env.config();

const token = config.parsed?.TELEGRAM_TOKEN;
const chatId = config.parsed?.CHAT_ID;

if (!token)
	throw new Error(
		'No token specified in config. Expected parameter TELEGRAM_TOKEN to be present.'
	);

const bot = new TelegramBot(token, { polling: true });

bot.onText(/^\/start/, async (message) => {
	await bot.sendMessage(
		message.chat.id,
		`This is an internal use only bot. Please ask an admin to configure the bot to use \`CHAT_ID=${message.chat.id}\`.`,
		{
			parse_mode: 'Markdown',
			reply_to_message_id: message.message_id,
		}
	);
});

if (chatId) {
	console.log(
		new Date().toISOString(),
		'CHAT_ID found. Chat bot is working now.'
	);

	reminders.forEach((reminder, index) => {
		console.log(
			new Date().toISOString(),
			`Scheduling reminder #${index} with CRON "${reminder.cron}".`
		);
		cron.schedule(reminder.cron, async () => {
			console.log(
				new Date().toISOString(),
				'Sending message to',
				chatId,
				`based on CRON #${index} (${reminder.cron}):`,
				JSON.stringify(reminder.message)
			);
			await bot.sendMessage(chatId, reminder.message, {
				parse_mode: 'Markdown',
			});
		});
	});
}

export {};
