const core = require('@actions/core');
<<<<<<< HEAD
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  "apiKey": process.env.NEXMO_API_KEY,
  "apiSecret": process.env.NEXMO_API_SECRET,
});

nexmo.message.sendSms(
  core.getInput('nexmoNumber'),
  core.getInput('recipientNumber'),
  core.getInput('message'),
  function(err, data) {
    if (err) {
     return core.setFailed(err);
    }
  }
);
=======
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
>>>>>>> ddb936dd367c92477002e3037e255f9782a8824b
