/**
 * A reminder definition that can get added in the `reminders.js` file.
 */
declare interface Reminder {
	/**
	 * The CRON expression that determines the schedule at which the
	 * {@link message} gets sent.
	 *
	 * @see https://crontab.guru/ CronTab (a website to quickly configure CRON
	 * expressions))
	 */
	cron: string;
	/**
	 * The message that gets sent to the channel on the schedule defined by
	 * {@link cron}.
	 */
	message: string;
	/**
	 * The chat IDs to which the reminder should get sent to.
	 */
	chatIds: string[];
}
