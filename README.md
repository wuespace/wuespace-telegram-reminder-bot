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
2. Run `/start` on the bot (in group channels, use `/start@bot_username`). The bot tells you to insert a `CHAT_ID` into the `.env` file.
3. Insert the `CHAT_ID` into the `.env` file.
4. Run `npm run deploy:restart` to restart the bot with the chat ID enabled.

The bot is now active and will send reminders as configured in the `index.js` file.

## Development Environment

Essentially the same as the deployment workflow (clone the repo, install dependencies with `npm ci`, create the `.env` and insert the `TELEGRAM_TOKEN`). But instead of running `npm run deploy`, use `npm start` during development for easier debugging capabilities.
