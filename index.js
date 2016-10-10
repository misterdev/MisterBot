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
  var chatId = msg.chat.id;
  var resp = 'culo';
  bot.sendMessage(chatId, resp);
});
bot.onText(/dab/ig, function (msg, match) {
  console.log('UNIH')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'https://media.giphy.com/media/l3zoKeX8bMG5sMP4s/giphy.gif';

  bot.sendDocument(chatId, photo, {caption: 'ALLARME PORCO!'}).then(function(sent) {
    console.log('UNIH SENT')
  }).catch(function(a,b,c) {
    console.error(a,b,c)
  });
});
bot.onText(/allarmeporco/ig, function (msg, match) {
  console.log('UNIH')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'http://i.giphy.com/N2C4cpZ3lRhvO.gif';

  bot.sendDocument(chatId, photo, {caption: 'ALLARME PORCO!'}).then(function(sent) {
    console.log('UNIH SENT')
  }).catch(function(a,b,c) {
    console.error(a,b,c)
  });
});
bot.onText(/misterbot\?/ig, function (msg, match) {
  var fromId = msg.chat.id;
  var resp = 'Ciao sono MisterBot e sono diventato un bot bravo, infatti ora utilizzo le API ufficiali. '+ 
  'Diventerò molto utile in futuro se Devid non si stanca di lavorare su di me. Intanto gustatevi un unih ' +
  'Ringrazio il Doge Team per il supporto alla mia creazione ';
  bot.sendMessage(fromId, resp);
});

bot.onText(/unih/ig, function (msg, match) {
  console.log('UNIH')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'https://s4.postimg.org/99mai2kgt/Screen_Shot_2016_09_20_at_19_23_37_2.png';

  bot.sendPhoto(chatId, photo, {caption: 'Almeno ringrazia, 5 euro dai...'}).then(function(sent) {
    console.log('UNIH SENT')
  }).catch(function(a,b,c) {
    console.error(a,b,c)
  });
});

bot.onText(/bus>/ig, function (msg, match) {
  console.log('bus>')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'https://s11.postimg.org/98gra0n43/Screen_Shot_2016_10_05_at_21_30_59.png';

  bot.sendPhoto(chatId, photo, {caption: 'Bus 93 Minerbio > Bologna'}).then(function(sent) {
    console.log('bus> SENT')
  }).catch(function(a,b,c) {
    console.error(a,b,c)
  });
});
bot.onText(/bus</ig, function (msg, match) {
  console.log('bus<')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'https://s13.postimg.org/tmiddr57b/Screen_Shot_2016_10_05_at_21_32_55.png';

  bot.sendPhoto(chatId, photo, {caption: 'Bus 93 Bologna > Minerbio'}).then(function(sent) {
    console.log('bus< SENT')
  }).catch(function(a,b,c) {
    console.error(a,b,c)
  });
});

bot.onText(/^suriettiv*/ig, function (msg, match) {
  console.log('bus<')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Surjection.svg/220px-Surjection.svg.png';
  bot.sendMessage(chatId, photo, {caption: 'f compre il codominio'});
});
bot.onText(/^iniettiv*/ig, function (msg, match) {
  console.log('bus<')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Injection.svg/170px-Injection.svg.png';
  bot.sendMessage(chatId, photo, {caption: 'f compre il dominio'});
});

bot.onText(/^trigo*/ig, function (msg, match) {
  console.log('trigo')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'https://s12.postimg.org/heozwfcjh/Screen_Shot_2016_10_06_at_14_01_39.png';
  bot.sendMessage(chatId, photo, {caption: 'Non imparerai mai la trigonometria, merda!'});
});

bot.onText(/banale/ig, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = '...banane ';
  bot.sendMessage(chatId, resp);
});

bot.onText(/del\ genere/ig, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = 'Può accompagnare solo...';
  bot.sendMessage(chatId, resp);
});

// bot.onText(/bus/, function (msg, match) {
//   console.log('hellobus', msg)
//   var chatId = msg.chat.id;
//   // photo can be: a file path, a stream or a Telegram file_id
//   var photo = 'https://s13.postimg.org/tmiddr57b/Screen_Shot_2016_10_05_at_21_32_55.png';

//   bot.sendPhoto(chatId, photo, {caption: 'Bus 93 Bologna > Minerbio'}).then(function(sent) {
//     console.log('bus< SENT')
//   }).catch(function(a,b,c) {
//     console.error(a,b,c)
//   });
// });
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