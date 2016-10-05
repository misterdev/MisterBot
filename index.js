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
'use strict'
const token = '266208728:AAHsolf1IVFQ3I6OWPv6PMQK_3T6jsPWb5E';
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram(token, {
    webhook: {
        url: 'https://powerful-beach-16130.herokuapp.com/'+token
    }
})

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        $.sendMessage('pong')
    }

    erikHandler($) {
        $.sendMessage('culo')
    }

    get routes() {
        return {
            'erikCommand': 'erikHandler'
        }
    }
}

tg.router
    .when(
        new TextCommand('erik', 'erikCommand'),
        new PingController()
    )