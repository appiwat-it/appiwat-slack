## Appiwat: Customized Slack

We created this package for using webhook in our projects.

### Installation
> npm i @appiwat/slack

## Add ENV for SLACK_WEBHOOK_URL
The default SLACK_WEBHOOK_URL is access from process.env.SLACK_WEBHOOK_URL. However, we can also pass the incoming webhook URL via `sendMessage( options, url )` as well.

### Usage
```
const Slack = require('@appiwat/slack');

const webhookUrl = https://incoming_webhook_url;

Slack.sendMessage({
  noted: 'note of the message',
  title: 'title of the message',
  message: 'message body',
  body: 'extra json.stringify information'
}, url);
```
