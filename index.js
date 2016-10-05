var TelegramBot = require('node-telegram-bot-api');

var token = '266208728:AAHsolf1IVFQ3I6OWPv6PMQK_3T6jsPWb5E' || process.env.TOKEN;
var crt = 'MIIC3zCCAccCAQAwazELMAkGA1UEBhMCSVQxEDAOBgNVBAgTB0JvbG9nbmExETAPBgNVBAcTCE1pbmVyYmlvMQ0wCwYDVQQDEwRGT09OMSgwJgYJKoZIhvcNAQkBFhlkZXZpZC5mYXJpbmVsbGlAZ21haWwuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA47Kw423OEmpcsSNSdsZyTh6Xy1W+U+w/GFUiHrcwXdKJ0Fe2UCdaR4hU61ZTq+nVLvbGl6OY3svQsESvnig3OW1Fc28K69bcxofNCd3jolRiNrPw4FDTkZtXpm0apppH42aLJtz87cMFSKeLVS/xBzypjVAejHfRw4gGrEwwJJYcd3xEUCR42HXcZ7b6DayhbdxkYzAOYPtaMj0v4ZqG8IO0/dm8X6EDGseoDRFka+5noP4ifjmN7HFNsDUuKu0BVHbf+WN/7djjUTYHDzP8BOdzmtdTPEedMI61sZ6Ey3G7O/FVkPkGDUZN/F64lXcKjQsbwI3xNoM2HH8P4GomjwIDAQABoC8wFQYJKoZIhvcNAQkHMQgTBmxvbGxvMTAWBgkqhkiG9w0BCQIxCRMHZGV2IHNybDANBgkqhkiG9w0BAQsFAAOCAQEALeohDSbdbIVPy54N24qnigakLxjshVRbQQS6qeGkzKgz3y6LfVisDrXmguAY4KfXOAN1KgsF07VVrPhMtXSe+LvvDMe/xZ3JoJK98mJ8yCDoQk2h2WEur52A1I3wYml0+qS/9bWRvoRxlk8I2WTQWa61ri7oVusWpFCll1fu7HvD6/OulfKcktfOWlLyNJVaa1fR2TQgyLOTmFoJyI0ug9CvKkFnrnrbJL3iLrhtrgoADvrtZbLS8jHMWy7BsNeyRkBrmexOLb6kzmmAOjLp6RqOpVJQXZ4Gtv8xSZeaUDMVBDIDyOG3BZe1JWPAyS9Lx8uAviHJC+6fv3ZHIP6E4w=='
var heroku_url = process.env.HEROKU_URL || 'https://powerful-beach-16130.herokuapp.com/'; 
console.log(process.env)
// Setup polling way
var bot = new TelegramBot(token, {polling: true});
// bot.setWebHook(heroku_url + bot.token, crt);

// Matches /echo [whatever]
bot.onText(/erik/ig, function (msg, match) {
  var fromId = msg.chat.id;
  var resp = 'culo';
  bot.sendMessage(fromId, resp);
});

bot.onText(/misterbot\?/ig, function (msg, match) {
  var fromId = msg.chat.id;
  var resp = 'Ciao sono MisterBot e sono diventato un bot bravo, infatti ora utilizzo le API ufficiali. '+ 
  'Diventerò molto utile in futuro se Devid non si stanca di lavorare su di me. Intanto gustatevi un unih ' +
  'Ringrazio il Doge Team per il supporto alla mia creazione ';
  bot.sendMessage(fromId, resp);
});

bot.on('message', function (msg, match) {
  console.log('UNIH')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'unih.png';

  bot.sendPhoto(chatId, photo, {caption: 'Almeno ringrazia, 5 euro dai...'}).then(function(sent) {
    console.log('UNIH SENT')
  }).catch(function(a,b,c) {
    console.error(a,b,c)
  });
});
 

// Any kind of message
// bot.on('message', function (msg) {
//   var chatId = msg.chat.id;
//   // photo can be: a file path, a stream or a Telegram file_id
//   var photo = 'cats.png';
//   bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
// });
// var token = '266208728:AAHsolf1IVFQ3I6OWPv6PMQK_3T6jsPWb5E' || process.env.TOKEN;

// var Bot = require('node-telegram-bot-api');
// var bot;

// if(process.env.NODE_ENV === 'production') {
//   bot = new Bot(token);
//   bot.setWebHook(process.env.HEROKU_URL + bot.token);
// }
// else {
//   bot = new Bot(token, { polling: true });
// }

// console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

// bot.onText(/^/, function (msg) {
//   var name = msg.from.first_name;
//   bot.sendMessage(msg.chat.id, 'Hello, ' + name + '!').then(function () {
//     // reply sent!
//   });
// });
// 'use strict'
// const token = '266208728:AAHsolf1IVFQ3I6OWPv6PMQK_3T6jsPWb5E';
// const Telegram = require('telegram-node-bot')
// const TelegramBaseController = Telegram.TelegramBaseController
// const TextCommand = Telegram.TextCommand
// const tg = new Telegram.Telegram(token, {
//     webhook: {
//         url: 'https://powerful-beach-16130.herokuapp.com/'+token
//     }
// })

// class PingController extends TelegramBaseController {
//     /**
//      * @param {Scope} $
//      */
//     pingHandler($) {
//         $.sendMessage('pong')
//     }

//     erikHandler($) {
//         $.sendMessage('culo')
//     }

//     get routes() {
//         return {
//             'erikCommand': 'erikHandler'
//         }
//     }
// }

// tg.router
//     .when(
//         new TextCommand('erik', 'erikCommand'),
//         new PingController()
//     )