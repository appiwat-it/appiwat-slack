const { IncomingWebhook } = require( '@slack/webhook' );

/**
 * Send a notification to a slack
 * @param options - opitons object: {
 *  title: err.message,
 *  note: error note,
 *  message: err object,
 *  body: req.body | req.params | req.query
 * }
 * @param [url] - optional SLACK WEBHOOK URL. Default to env SLACK_WEBHOOK_URL
 */
const sendMessage = async ( options, url = process.env.SLACK_WEBHOOK_URL ) => {
  const webhook = new IncomingWebhook( url );

  try {
    await webhook.send( {
      attachments: [{
        color: options.color || '#0A8092',
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: `${options.title}`,
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*${options.note}*`,
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `\`\`\`${options.message}\`\`\``,
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `\`\`\`${JSON.stringify( options.body )}\`\`\``,
            },
          },
        ],
      }],
    } );
  } catch ( err ) {
    console.log( err );
  }
};

module.exports = sendMessage;
