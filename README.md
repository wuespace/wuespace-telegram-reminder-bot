# WüSpace Telegram Reminder Bot

A Telegram bot for sending reminders in group channels.

This bot makes reminders hard-coded, meaning channel members can't change them, allowing its use in untrusted group channels.

## Deployment

1. Clone the repo
2. Run `npm ci`
3. Run `cp .env.example .env`
4. Insert your telegram bot token into the `.env` file as `TELEGRAM_TOKEN`.
5. Run `npm run deploy`. This runs the bot using `forever`. [Learn more about `forever`](https://www.npmjs.com/package/forever).

Your bot is now running and ready to configure.

## Configuring the bot

1. Add the bot to the desired group channel.
2. Run `/start` on the bot (in group channels, use `/start@bot_username`). The bot tells you your chat's ID.
3. Insert the chat id as `PR_CHAT_ID` into the `.env` file.
4. Run `npm run deploy:restart` to restart the bot with the chat ID enabled.

The bot is now active and will send reminders as configured in the `reminders.js` file.

## Updating reminders

You can set up the reminders in the `reminders.js` file. It consists of an array of objects that each contain a `cron` field (the CRON expression) and a `message` field (the message that gets sent on the CRON schedule) as well as an array of the chat IDs the reminder gets sent to.

Update the file (you can use [the web tool CronTab](https://crontab.guru/) to build your CRON expression) and set the message that should get sent. After that, just run `npm run deploy:restart` and the new reminder gets used.

## Development Environment

Essentially the same as the deployment workflow (clone the repo, install dependencies with `npm ci`, create the `.env` and insert the `TELEGRAM_TOKEN`). But instead of running `npm run deploy`, use `npm start` during development for easier debugging capabilities.
