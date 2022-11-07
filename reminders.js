import env from 'dotenv';
const config = env.config();

const pr = config.parsed?.PR_CHAT_ID;
const vorstand = config.parsed?.VORSTAND_CHAT_ID;

if (!pr || !vorstand)
	console.log(
		new Date().toISOString(),
		'No PR or Vorstand chat ID found => not setting up any CRON jobs!'
	);

/**
 * The reminders sent by the bot
 * @type {Reminder[]}
 */
export const reminders =
	pr && vorstand
		? [
				{
					cron: '30 16 * * 1',
					message: '🛎️ Vorstandsmeeting in 30 Minuten!',
					chatIds: [vorstand],
				},
				{
					cron: '0 17 * * 1',
					message: '🛎️ Vorstandsmeeting startet jetzt!',
					chatIds: [vorstand],
				},
				{
					cron: '30 18 * * 1',
					message: `🛎 PR-Meeting / Co-Working in 30 Minuten!`,
					chatIds: [pr],
				},
				{
					cron: '0 19 * * 1',
					message: `🛎 PR-Meeting / Co-Working jetzt!`,
					chatIds: [pr],
				},
				{
					cron: '30 14 * * 5',
					message: `⌚ Bitte die Weekly Reflection ausfüllen.

https://wuespace.koan.co/team/19733eca-8dff-4a87-8a3b-b8fbfdf5964e/nu/reflections`,
					chatIds: [pr],
				},
				{
					cron: '30 16 * * 0',
					message: `⏰ Letzte Gelegenheit der Woche, die Weekly Reflection auszufüllen!

https://wuespace.koan.co/team/19733eca-8dff-4a87-8a3b-b8fbfdf5964e/nu/reflections`,
					chatIds: [pr],
				},
		  ]
		: [];
