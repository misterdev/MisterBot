'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('266208728:AAHsolf1IVFQ3I6OWPv6PMQK_3T6jsPWb5E'
    webhook: {
        url: 'https://powerful-beach-16130.herokuapp.com/',
        port: 3000,
        host: 'localhost'
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