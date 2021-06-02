## Appiwat: Customized Slack

We created this package for using webhook in our projects.

### Installation
``
> npm i @appiwat/slack
``

### Usage
``
const Slack = require('@appiwat/slack');

Slack.sendMessage({
  noted: 'note of the message',
  title: 'title of the message',
  message: 'message body',
  body: 'extra json.stringify information'
})
``