import TelegramBot from 'node-telegram-bot-api';
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

bot.onText(/^\/start$/, async (message) => {
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
	console.log('CHAT_ID found. Chat bot is working now.');

	cron.schedule('30 18 * * 1', async () => {
		await bot.sendMessage(chatId, '🛎 PR-Meeting / Co-Working in 30 Minuten!', {
			parse_mode: 'Markdown',
		});
	});

	cron.schedule('0 19 * * 1', async () => {
		await bot.sendMessage(chatId, '🛎 PR-Meeting / Co-Working jetzt!', {
			parse_mode: 'Markdown',
		});
	});

	cron.schedule('30 14 * * 5', async () => {
		await bot.sendMessage(
			chatId,
			'⌚ Bitte die Weekly Reflection ausfüllen.\n\nhttps://wuespace.koan.co/team/19733eca-8dff-4a87-8a3b-b8fbfdf5964e/nu/reflections',
			{
				parse_mode: 'Markdown',
			}
		);
	});

	cron.schedule('30 16 * * 0', async () => {
		await bot.sendMessage(
			chatId,
			'⏰ Letzte Gelegenheit der Woche, die Weekly Reflection auszufüllen!\n\nhttps://wuespace.koan.co/team/19733eca-8dff-4a87-8a3b-b8fbfdf5964e/nu/reflections',
			{
				parse_mode: 'Markdown',
			}
		);
	});
}

export {};
