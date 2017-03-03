var aerumtor = 213240765; 
var me = 27920409;

var TelegramBot = require('node-telegram-bot-api');

var token = '266208728:AAHsolf1IVFQ3I6OWPv6PMQK_3T6jsPWb5E' || process.env.TOKEN;
var crt = 'MIIC3zCCAccCAQAwazELMAkGA1UEBhMCSVQxEDAOBgNVBAgTB0JvbG9nbmExETAPBgNVBAcTCE1pbmVyYmlvMQ0wCwYDVQQDEwRGT09OMSgwJgYJKoZIhvcNAQkBFhlkZXZpZC5mYXJpbmVsbGlAZ21haWwuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA47Kw423OEmpcsSNSdsZyTh6Xy1W+U+w/GFUiHrcwXdKJ0Fe2UCdaR4hU61ZTq+nVLvbGl6OY3svQsESvnig3OW1Fc28K69bcxofNCd3jolRiNrPw4FDTkZtXpm0apppH42aLJtz87cMFSKeLVS/xBzypjVAejHfRw4gGrEwwJJYcd3xEUCR42HXcZ7b6DayhbdxkYzAOYPtaMj0v4ZqG8IO0/dm8X6EDGseoDRFka+5noP4ifjmN7HFNsDUuKu0BVHbf+WN/7djjUTYHDzP8BOdzmtdTPEedMI61sZ6Ey3G7O/FVkPkGDUZN/F64lXcKjQsbwI3xNoM2HH8P4GomjwIDAQABoC8wFQYJKoZIhvcNAQkHMQgTBmxvbGxvMTAWBgkqhkiG9w0BCQIxCRMHZGV2IHNybDANBgkqhkiG9w0BAQsFAAOCAQEALeohDSbdbIVPy54N24qnigakLxjshVRbQQS6qeGkzKgz3y6LfVisDrXmguAY4KfXOAN1KgsF07VVrPhMtXSe+LvvDMe/xZ3JoJK98mJ8yCDoQk2h2WEur52A1I3wYml0+qS/9bWRvoRxlk8I2WTQWa61ri7oVusWpFCll1fu7HvD6/OulfKcktfOWlLyNJVaa1fR2TQgyLOTmFoJyI0ug9CvKkFnrnrbJL3iLrhtrgoADvrtZbLS8jHMWy7BsNeyRkBrmexOLb6kzmmAOjLp6RqOpVJQXZ4Gtv8xSZeaUDMVBDIDyOG3BZe1JWPAyS9Lx8uAviHJC+6fv3ZHIP6E4w=='
var heroku_url = process.env.HEROKU_URL || 'https://powerful-beach-16130.herokuapp.com/'; 
console.log('TELEBOT - STARTED')
// Setup polling way
var bot = new TelegramBot(token, {polling: true});
// bot.setWebHook(heroku_url + bot.token, crt);

var rekt = [
  'http://i.giphy.com/12kwNiP8SSIUus.gif',
  'http://i.giphy.com/Mk6T7bHugAPMQ.gif',
  'http://i.giphy.com/vSR0fhtT5A9by.gif',
  'http://i.giphy.com/1PiLqGbjbulva.gif',
  'http://i.giphy.com/hqDces1MY6cgw.gif',
  'http://i.giphy.com/XMrHbDQGOovbW.gif',
  'https://media.tenor.co/images/e1f7902f31d2162c9ea3ab0c7a7491e4/raw',
  'https://media.tenor.co/images/f0515e416fd1ba95974412c18fd90d46/raw',
  'https://media.giphy.com/media/5HFtrdH9r511m/giphy.gif'
  // 'http://i.imgur.com/sNlR0KG.jpg'
]
bot.onText(/#rekt/ig, function (msg, match) {
  // if( msg.chat.id == -115069639) {
    var id = Math.floor(Math.random() * rekt.length)
    bot.sendDocument(msg.chat.id, rekt[id], {caption: 'Someone got rekt!'}).then(function(sent) {
      console.log('REKT SENT')
    }).catch(function(a,b,c) {
      console.error(a,b,c)
    });
  // }
});

bot.onText(/#notrekt/ig, function (msg, match) {
  console.log('not', msg, match)
  var chatId = msg.chat.id;
  var userId = msg.from.id;
  var photo = 'https://i.ytimg.com/vi/HO8ctP_QNZc/maxresdefault.jpg';
  if(userId === me) {
    bot.sendPhoto(chatId, photo, {caption: ''}).then(function(sent) {
      console.log('REKT SENT')
    }).catch(function(a,b,c) {
      console.error(a,b,c)
    });
  }
})

bot.onText(/\/triggered/ig, function (msg, match) {
  if(msg.from.id === 27920409 && msg.chat.id === 27920409 || msg.from.id === 4454704 && msg.chat.id === 4454704) {//
    bot.sendPhoto(4454704, 'https://s3.postimg.org/442z2sl4z/triggered.png', {caption: 'Someone got triggered..'}).then(function(sent) {
      console.log('UNIH SENT')
    }).catch(function(a,b,c) {
      console.error(a,b,c)
    });
    bot.sendPhoto(27920409, 'https://s3.postimg.org/442z2sl4z/triggered.png', {caption: 'Someone got triggered..'}).then(function(sent) {
      console.log('UNIH SENT')
    }).catch(function(a,b,c) {
      console.error(a,b,c)
    });
  }
});

// Matches /echo [whatever]
bot.onText(/^erik$/ig, function (msg, match) {
  console.log(msg, match)
  var chatId = msg.chat.id;
  var userID = msg.from.id;

  if(userID === aerumtor) {
    var photo = 'https://i.ytimg.com/vi/HO8ctP_QNZc/maxresdefault.jpg';
    bot.sendPhoto(chatId, photo, {caption: ''})
  } else if(chatId !== -179683645  ) {
    var resp = msg.text.replace(/erik/ig, 'culo');
    bot.sendMessage(chatId, resp);
  }
});



bot.onText(/^culo$/ig, function (msg, match) {
  var chatId = msg.chat.id;
  var userID = msg.from.id;
  if(chatId !== -179683645 && userID !== aerumtor) {
    var resp = msg.text.replace(/culo/ig, 'erik');
    bot.sendMessage(chatId, resp);
  }
});

// bot.onText(/n4t4l3/ig, function (msg, match) {
//   console.log(msg, match)
//   var chatId = msg.chat.id;
//   var resp = msg.text.replace(/n4t4l3/ig, 'natale');
//   bot.sendMessage(chatId, resp);
// });



bot.on('new_chat_participant', function(msg) {
  var chatId = msg.chat.id;
  var string = 'Benvenuto '+ msg.new_chat_member.first_name +'! Di cosa puzzi?';
  bot.sendMessage(chatId, string);
});

// bot.on('message', function (msg, x) {
//   console.log('YYYYYYYYY', msg, x)
// })

bot.onText(/dab/ig, function (msg, match) {
  console.log('UNIH')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'https://media.giphy.com/media/l3zoKeX8bMG5sMP4s/giphy.gif';

  bot.sendDocument(chatId, photo, {caption: 'Get dabbed!'}).then(function(sent) {
    console.log('UNIH SENT')
  }).catch(function(a,b,c) {
    console.error(a,b,c)
  });
});

bot.onText(/allarmeporco/ig, function (msg, match) {
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

// bot.onText(/\/tesi/ig, function (msg, match) {
//   var fromId = msg.chat.id;
//   var resp = `
// Stile by cianca: 
// http://www.cs.unibo.it/~cianca/wwwpages/consigli.html

// Tesi by Vitali:
// http://tesi.fabio.web.cs.unibo.it/Tesi/TesiLaDissertazione

// LateX by unibo:
// http://corsi.unibo.it/informatica/Pagine/tesi-in-latex.aspx
//   `;
//   bot.sendMessage(fromId, resp);
// });

bot.onText(/unih/ig, function (msg, match) {
  console.log('UNIH')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  // var photo = 'https://s4.postimg.org/99mai2kgt/Screen_Shot_2016_09_20_at_19_23_37_2.png';
  var photo = 'https://s3.postimg.org/ag52upvnn/photo587983717960002_6_Zyfk.jpg'
  bot.sendPhoto(chatId, photo, {caption: 'Almeno ringrazia, 5 euro dai...'}).then(function(sent) {
    console.log('UNIH SENT')
  }).catch(function(a,b,c) {
    console.error(a,b,c)
  });
});

bot.onText(/unixfs/ig, function (msg, match) {
  console.log('UNIH')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'http://i65.tinypic.com/2i9l6rm.png';
  var photo2 = 'http://i67.tinypic.com/1zvcoc3.png';
  bot.sendPhoto(chatId, photo, {caption: ''}).then(function(sent) {
    console.log('UNIH SENT')
  }).catch(function(a,b,c) {
    console.error(a,b,c)
  });
  bot.sendPhoto(chatId, photo2, {caption: 'If you\'ve ever wondered...'}).then(function(sent) {
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

bot.onText(/\/suriettiv*/ig, function (msg, match) {
  console.log('bus<')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Surjection.svg/220px-Surjection.svg.png';
  bot.sendMessage(chatId, photo, {caption: 'f compre il codominio'});
});
bot.onText(/\/iniettiv*/ig, function (msg, match) {
  console.log('bus<')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Injection.svg/170px-Injection.svg.png';
  bot.sendMessage(chatId, photo, {caption: 'f compre il dominio'});
});

bot.onText(/\/trigo$/ig, function (msg, match) {
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

var moment = require('moment');
var exams = {};

exams['Basi di Dati'] = ['23/05/2017', '06/06/2017', '27/06/2017', '12/09/2017']
// exams['Algoritmi @aula pincherle'] = ['19/01/2017 13:00', '10/02/2017 11:00']
// exams['UUX - mattina scritto/pomeriggio orale'] = ['18/01/2017',  '15/02/2017']

bot.onText(/\/esami/, (msg) => {
  var chatId = msg.chat.id;
  var text = '';
  for(var sub in exams) {
    text += '<b>' + sub +'</b><pre>';
    for(var date of exams[sub]) {
      var d = moment(date, 'DD/MM/YYYY HH:mm');
      text += d.format('DD/MM')
      var h = d.format('HH');
      console.error(h)
      if(h !== moment('00').format('HH')) text += ' h' + h;// + '(' + moment(date, 'DD/MM/YYYY').toNow(true) + ') - '
      text += ' - ';
    }
    text = text.substring(0, text.length -2) + '</pre>\n';
  }
  bot.sendMessage(chatId, text, { parse_mode: "HTML" });
})

var doges = [
  'http://doge2048.com/img/212/doge-derp-212.gif',
  'http://doge2048.com/img/212/doge-fat-212.gif',
  'http://doge2048.com/img/212/doge-gradient-212.gif',
  'http://doge2048.com/img/212/doge-hat-212.gif',
  'http://doge2048.com/img/212/doge-peepers-212.gif',
  'http://doge2048.com/img/212/doge-prizza-212.gif',
  'http://doge2048.com/img/212/doge-rainbow-212.gif',
  'http://doge2048.com/img/212/doge-shake-212.gif',
  'http://doge2048.com/img/212/doge-shake-space-212.gif',
  'http://doge2048.com/img/212/doge-sunglasses-212.gif',
  'http://doge2048.com/img/212/doge-wink-212.gif'
]

bot.onText(/doge/ig, (msg) => {
  console.log('DOGE')
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var id = Math.floor(Math.random() * doges.length)

  bot.sendDocument(chatId, doges[id], {caption: 'Praise the doge'}).then(function(sent) {
    console.log('UNIH SENT')
  }).catch(function(a,b,c) {
    console.error(a,b,c)
  });
})


var explosions = [
  'https://media.giphy.com/media/Jt2hioTrGEDHW/giphy.gif',
  'http://i.giphy.com/RWwzyQLBeLJbq.gif',
  'http://i.giphy.com/QIrN5WRhpRpPW.gif',
  'http://i.giphy.com/8gVd1OX3st6nu.gif',
  'http://i.giphy.com/RvKEaRAyvzsTC.gif',
  'http://i.giphy.com/1BXLbshE7ICNW.gif',
  'http://i.giphy.com/Tfuee4rkfzXkA.gif',
  'http://i.giphy.com/w6WyJW2yUmwH6.gif'
  // 'https://i.ytimg.com/vi/gPxJAx7ysVA/maxresdefault.jpg'
]
bot.onText(/inciampelli/ig, function (msg, match) {
  // if( msg.chat.id == -115069639) {
    var id = Math.floor(Math.random() * explosions.length)
    bot.sendDocument(msg.chat.id, explosions[id], {caption: "S'è inciampato gabrielli"}).then(function(sent) {
      console.log('REKT SENT')
    }).catch(function(a,b,c) {
      console.error(a,b,c)
    });
  // }
});



