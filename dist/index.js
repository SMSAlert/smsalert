"use strict";
const core = require('@actions/core');
const SMS = require('smsalert');
async function run() {
    const senderid = core.getInput('Senderid');
    const to = core.getInput('toPhoneNumber');
    const message = core.getInput('message');
    const username = core.getInput('SMSALERT_USERNAME') || process.env.SMSALERT_USERNAME;
    const password = core.getInput('SMSALERT_PASSWORD') || process.env.SMSALERT_PASSWORD;
   
    core.debug('Sending SMS');
	const sms = new SMS(username, password)
	sms.send(to, message,senderid)
    .then(body => console.log(body)) // returns { message_id: 'string' }
  .catch(err => console.log(err.message))
    core.debug('SMS sent!');
    return body;
}
async function execute() {
    try {
        return await run();
    }
    catch ({ message }) {
        core.error('Failed to send message', message);
        core.setFailed(message);
    }
}
module.exports = execute;
execute();
