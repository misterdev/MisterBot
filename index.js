// { message_id: 35262,
//   from: 
//    { id: 27920409,
//      first_name: 'Dev',
//      username: 'MisterDev',
//      language_code: 'en-GB' },
//   chat: 
//    { id: -115069639,
//      title: 'DOGE Team - TRGDGB',
//      type: 'group',
//      all_members_are_administrators: false },
//   date: 1497203863,
//   text: 'prova' } [ 'prova', index: 0, input: 'prova' ] 

var me = 27920409;
var lucillax = 141452238;

var TelegramBot = require('node-telegram-bot-api');

var token = '266208728:AAHsolf1IVFQ3I6OWPv6PMQK_3T6jsPWb5E' || process.env.TOKEN;
var crt = 'MIIC3zCCAccCAQAwazELMAkGA1UEBhMCSVQxEDAOBgNVBAgTB0JvbG9nbmExETAPBgNVBAcTCE1pbmVyYmlvMQ0wCwYDVQQDEwRGT09OMSgwJgYJKoZIhvcNAQkBFhlkZXZpZC5mYXJpbmVsbGlAZ21haWwuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA47Kw423OEmpcsSNSdsZyTh6Xy1W+U+w/GFUiHrcwXdKJ0Fe2UCdaR4hU61ZTq+nVLvbGl6OY3svQsESvnig3OW1Fc28K69bcxofNCd3jolRiNrPw4FDTkZtXpm0apppH42aLJtz87cMFSKeLVS/xBzypjVAejHfRw4gGrEwwJJYcd3xEUCR42HXcZ7b6DayhbdxkYzAOYPtaMj0v4ZqG8IO0/dm8X6EDGseoDRFka+5noP4ifjmN7HFNsDUuKu0BVHbf+WN/7djjUTYHDzP8BOdzmtdTPEedMI61sZ6Ey3G7O/FVkPkGDUZN/F64lXcKjQsbwI3xNoM2HH8P4GomjwIDAQABoC8wFQYJKoZIhvcNAQkHMQgTBmxvbGxvMTAWBgkqhkiG9w0BCQIxCRMHZGV2IHNybDANBgkqhkiG9w0BAQsFAAOCAQEALeohDSbdbIVPy54N24qnigakLxjshVRbQQS6qeGkzKgz3y6LfVisDrXmguAY4KfXOAN1KgsF07VVrPhMtXSe+LvvDMe/xZ3JoJK98mJ8yCDoQk2h2WEur52A1I3wYml0+qS/9bWRvoRxlk8I2WTQWa61ri7oVusWpFCll1fu7HvD6/OulfKcktfOWlLyNJVaa1fR2TQgyLOTmFoJyI0ug9CvKkFnrnrbJL3iLrhtrgoADvrtZbLS8jHMWy7BsNeyRkBrmexOLb6kzmmAOjLp6RqOpVJQXZ4Gtv8xSZeaUDMVBDIDyOG3BZe1JWPAyS9Lx8uAviHJC+6fv3ZHIP6E4w=='

console.log('TELEBOT - STARTED')
    // Setup polling way
var bot = new TelegramBot(token, { polling: true });

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
]

function sendReminder() {

}

sendReminder()

bot.on('message', function(msg) {
    if (msg.chat.type === 'private') {
        if (msg.from.id !== me && msg.from.id !== lucillax) {
            console.log(msg)
            var text = msg.from.first_name + " @" + msg.from.username + " ID: " + msg.from.id + " :\n";

            if (msg.photo) {
                text += msg.caption || '';
                bot.sendPhoto(me, msg.photo[0].file_id, { caption: text })
            } else if (msg.document) {
                text += msg.caption || '';
                bot.sendDocument(me, msg.document.file_id, { caption: text })
            } else {
                if (msg.text) text += msg.text;
                bot.sendMessage(me, text);
            }

        } else {
            if ((msg.caption && msg.caption.startsWith('lucillax'))) {
                var text = msg.caption;
                if (text) text = text.replace('lucillax', '')

                bot.sendPhoto(lucillax, msg.photo[0].file_id, { caption: text })
                bot.sendPhoto(me, msg.photo[0].file_id, { caption: text })
            }
        }
    }
})

bot.onText(/lucillax/, function(msg, match) {
    console.log('lucillax', msg)
    var resp = msg.text.replace("lucillax", "")
    bot.sendMessage(lucillax, resp);
    bot.sendMessage(me, resp);
});

bot.onText(/devidex/, function(msg, match) {
    console.log('devidex', msg)
    var resp = msg.text.replace("devidex", "")
    bot.sendMessage(me, resp);
});


bot.onText(/#rekt/ig, function(msg, match) {
    // if( msg.chat.id == -115069639) {
    var id = Math.floor(Math.random() * rekt.length)
    bot.sendDocument(msg.chat.id, rekt[id], { caption: 'Someone got rekt!' }).then(function(sent) {
        console.log('REKT SENT')
    }).catch(function(a, b, c) {
        console.error(a, b, c)
    });
    // }
});

bot.onText(/compless/ig, function(msg, match) {
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, "@WutFaceKappa stiamo aspettando tu faccia functionare @MeshRiconfigComples_bot");
});

bot.onText(/#notrekt/ig, function(msg, match) {
    console.log('not', msg, match)
    var chatId = msg.chat.id;
    var userId = msg.from.id;
    var photo = 'https://i.ytimg.com/vi/HO8ctP_QNZc/maxresdefault.jpg';
    if (userId === me) {
        bot.sendPhoto(chatId, photo, { caption: '' }).then(function(sent) {
            console.log('REKT SENT')
        }).catch(function(a, b, c) {
            console.error(a, b, c)
        });
    }
})

bot.onText(/\/triggered/ig, function(msg, match) {
    if (msg.from.id === 27920409 && msg.chat.id === 27920409 || msg.from.id === 4454704 && msg.chat.id === 4454704) { //
        bot.sendPhoto(4454704, 'https://s3.postimg.org/442z2sl4z/triggered.png', { caption: 'Someone got triggered..' }).then(function(sent) {
            console.log('UNIH SENT')
        }).catch(function(a, b, c) {
            console.error(a, b, c)
        });
        bot.sendPhoto(27920409, 'https://s3.postimg.org/442z2sl4z/triggered.png', { caption: 'Someone got triggered..' }).then(function(sent) {
            console.log('UNIH SENT')
        }).catch(function(a, b, c) {
            console.error(a, b, c)
        });
    }
});

// Matches /echo [whatever]
bot.onText(/^erik$/ig, function(msg, match) {
    console.log(msg, match)
    var chatId = msg.chat.id;
    var userID = msg.from.id;

    if (userID === aerumtor) {
        var photo = 'https://i.ytimg.com/vi/HO8ctP_QNZc/maxresdefault.jpg';
        bot.sendPhoto(chatId, photo, { caption: '' })
    } else if (chatId !== -179683645) {
        var resp = msg.text.replace(/erik/ig, 'culo');
        bot.sendMessage(chatId, resp);
    }
});


bot.onText(/^culo$/ig, function(msg, match) {
    var chatId = msg.chat.id;
    var userID = msg.from.id;
    if (chatId !== -179683645 && userID !== aerumtor) {
        var resp = msg.text.replace(/culo/ig, 'erik');
        bot.sendMessage(chatId, resp);
    }
});

bot.onText(/allarmeporco/ig, function(msg, match) {
    var chatId = msg.chat.id;
    // photo can be: a file path, a stream or a Telegram file_id
    var photo = 'http://i.giphy.com/N2C4cpZ3lRhvO.gif';

    bot.sendDocument(chatId, photo, { caption: 'ALLARME PORCO!' }).then(function(sent) {
        console.log('UNIH SENT')
    }).catch(function(a, b, c) {
        console.error(a, b, c)
    });
});
bot.onText(/unixfs/ig, function(msg, match) {
    console.log('UNIH')
    var chatId = msg.chat.id;
    // photo can be: a file path, a stream or a Telegram file_id
    var photo = 'http://i65.tinypic.com/2i9l6rm.png';
    var photo2 = 'http://i67.tinypic.com/1zvcoc3.png';
    bot.sendPhoto(chatId, photo, { caption: '' }).then(function(sent) {
        console.log('UNIH SENT')
    }).catch(function(a, b, c) {
        console.error(a, b, c)
    });
    bot.sendPhoto(chatId, photo2, { caption: 'If you\'ve ever wondered...' }).then(function(sent) {
        console.log('UNIH SENT')
    }).catch(function(a, b, c) {
        console.error(a, b, c)
    });
});


bot.onText(/\/suriettiv*/ig, function(msg, match) {
    console.log('bus<')
    var chatId = msg.chat.id;
    // photo can be: a file path, a stream or a Telegram file_id
    var photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Surjection.svg/220px-Surjection.svg.png';
    bot.sendMessage(chatId, photo, { caption: 'f compre il codominio' });
});
bot.onText(/\/iniettiv*/ig, function(msg, match) {
    console.log('bus<')
    var chatId = msg.chat.id;
    // photo can be: a file path, a stream or a Telegram file_id
    var photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Injection.svg/170px-Injection.svg.png';
    bot.sendMessage(chatId, photo, { caption: 'f compre il dominio' });
});

bot.onText(/\/trigo$/ig, function(msg, match) {
    console.log('trigo')
    var chatId = msg.chat.id;
    // photo can be: a file path, a stream or a Telegram file_id
    var photo = 'https://s12.postimg.org/heozwfcjh/Screen_Shot_2016_10_06_at_14_01_39.png';
    bot.sendMessage(chatId, photo, { caption: 'Non imparerai mai la trigonometria, merda!' });
});

bot.onText(/banale/ig, function(msg, match) {
    var chatId = msg.chat.id;
    var resp = '...banane ';
    bot.sendMessage(chatId, resp);
});

bot.onText(/del\ genere/ig, function(msg, match) {
    var chatId = msg.chat.id;
    var resp = 'Può accompagnare solo...';
    bot.sendMessage(chatId, resp);
});

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

    bot.sendDocument(chatId, doges[id], { caption: 'Praise the doge' }).then(function(sent) {
        console.log('UNIH SENT')
    }).catch(function(a, b, c) {
        console.error(a, b, c)
    });
})