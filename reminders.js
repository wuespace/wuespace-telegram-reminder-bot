/**
 * The reminders sent by the bot
 * @type {Reminder[]}
 */
export const reminders = [
	{
		cron: '30 18 * * 1',
		message: `🛎 PR-Meeting / Co-Working in 30 Minuten!`,
	},
	{
		cron: '0 19 * * 1',
		message: `🛎 PR-Meeting / Co-Working jetzt!`,
	},
	{
		cron: '30 14 * * 5',
		message: `⌚ Bitte die Weekly Reflection ausfüllen.

https://wuespace.koan.co/team/19733eca-8dff-4a87-8a3b-b8fbfdf5964e/nu/reflections`,
	},
	{
		cron: '30 16 * * 0',
		message: `⏰ Letzte Gelegenheit der Woche, die Weekly Reflection auszufüllen!

https://wuespace.koan.co/team/19733eca-8dff-4a87-8a3b-b8fbfdf5964e/nu/reflections`,
	},
];
