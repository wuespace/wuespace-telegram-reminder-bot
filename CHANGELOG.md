# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://github.com/wuespace/wuespace-telegram-reminder-bot/compare/v2.0.0...v2.1.0) (2022-11-07)


### Features

* Add Vorstandsmeeting reminders ([d8162a2](https://github.com/wuespace/wuespace-telegram-reminder-bot/commit/d8162a2697b701d1e423f135f4676f729be863ac))

## [2.0.0](https://github.com/wuespace/wuespace-telegram-reminder-bot/compare/v1.3.0...v2.0.0) (2021-12-05)


### ⚠ BREAKING CHANGES

* The `CHAT_ID` environment variable in the `.env` file got replaced with a `PR_CHAT_ID` variable.

For non-WüSpace-usages, **don't use the `PR_CHAT_ID` variable!** Instead, define variables that match your own structure (for the different channels that you use) and adjust the `reminders.js` file to use your IDs.
* `Reminder` objects have an additional, required property `chatIds: string[]` that holds the chat IDs that the bot sends the reminders to.

### Features

* Move chat ID configuration to reminders to allow bot usage in several channels ([55db651](https://github.com/wuespace/wuespace-telegram-reminder-bot/commit/55db651e220f3ee1903ee3c046f3e74a2dcba858)), closes [#2](https://github.com/wuespace/wuespace-telegram-reminder-bot/issues/2)

## [1.3.0](https://github.com/wuespace/wuespace-telegram-reminder-bot/compare/v1.2.1...v1.3.0) (2021-12-05)


### Features

* Add better logging, including timestamps and log messages when reminders get sent ([7181883](https://github.com/wuespace/wuespace-telegram-reminder-bot/commit/718188329b924dff9bcc3100e52b11bc981d5b0b)), closes [#3](https://github.com/wuespace/wuespace-telegram-reminder-bot/issues/3)

### [1.2.1](https://github.com/wuespace/wuespace-telegram-reminder-bot/compare/v1.2.0...v1.2.1) (2021-12-04)

## [1.2.0](https://github.com/wuespace/wuespace-telegram-reminder-bot/compare/v1.1.1...v1.2.0) (2021-12-04)


### Features

* Extract reminder configuration to `reminders.js` to make it easier to configure ([926f89d](https://github.com/wuespace/wuespace-telegram-reminder-bot/commit/926f89d0853c9943aec0a43aafc73427693c3fe7)), closes [#1](https://github.com/wuespace/wuespace-telegram-reminder-bot/issues/1)

### [1.1.1](https://github.com/wuespace/wuespace-telegram-reminder-bot/compare/v1.1.0...v1.1.1) (2021-12-04)

## [1.1.0](///compare/v1.0.1...v1.1.0) (2021-12-04)


### Features

* Prepare open-sourcing the repo 5afd31a

### [1.0.1](///compare/v1.0.0...v1.0.1) (2021-12-04)


### Bug Fixes

* Also listen for group `/start` command 3760cbe

## 1.0.0 (2021-12-04)


### Features

* Initial release 5b073ee
