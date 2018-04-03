var CronJob = require('cron').CronJob;
new CronJob('* 21 22 * * *', function() {
    console.log('You will see this message every second');
}, null, true, 'Europe/Rome');