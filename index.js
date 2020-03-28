const core = require('@actions/core');
const SMS = require('smsalert');

const sms = new SMS(username, password);

sms.send(to, message,senderid)
    .then(body => console.log(body)) // returns { message_id: 'string' }
  .catch(err => console.log(err.message))
    core.debug('SMS sent!');
