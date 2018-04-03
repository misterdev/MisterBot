// EXAMPLE MESSAGE
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

import TelegramBot from 'node-telegram-bot-api'

// TODO
var token = '266208728:AAHsolf1IVFQ3I6OWPv6PMQK_3T6jsPWb5E' || process.env.TOKEN
var crt = 'MIIC3zCCAccCAQAwazELMAkGA1UEBhMCSVQxEDAOBgNVBAgTB0JvbG9nbmExETAPBgNVBAcTCE1pbmVyYmlvMQ0wCwYDVQQDEwRGT09OMSgwJgYJKoZIhvcNAQkBFhlkZXZpZC5mYXJpbmVsbGlAZ21haWwuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA47Kw423OEmpcsSNSdsZyTh6Xy1W+U+w/GFUiHrcwXdKJ0Fe2UCdaR4hU61ZTq+nVLvbGl6OY3svQsESvnig3OW1Fc28K69bcxofNCd3jolRiNrPw4FDTkZtXpm0apppH42aLJtz87cMFSKeLVS/xBzypjVAejHfRw4gGrEwwJJYcd3xEUCR42HXcZ7b6DayhbdxkYzAOYPtaMj0v4ZqG8IO0/dm8X6EDGseoDRFka+5noP4ifjmN7HFNsDUuKu0BVHbf+WN/7djjUTYHDzP8BOdzmtdTPEedMI61sZ6Ey3G7O/FVkPkGDUZN/F64lXcKjQsbwI3xNoM2HH8P4GomjwIDAQABoC8wFQYJKoZIhvcNAQkHMQgTBmxvbGxvMTAWBgkqhkiG9w0BCQIxCRMHZGV2IHNybDANBgkqhkiG9w0BAQsFAAOCAQEALeohDSbdbIVPy54N24qnigakLxjshVRbQQS6qeGkzKgz3y6LfVisDrXmguAY4KfXOAN1KgsF07VVrPhMtXSe+LvvDMe/xZ3JoJK98mJ8yCDoQk2h2WEur52A1I3wYml0+qS/9bWRvoRxlk8I2WTQWa61ri7oVusWpFCll1fu7HvD6/OulfKcktfOWlLyNJVaa1fR2TQgyLOTmFoJyI0ug9CvKkFnrnrbJL3iLrhtrgoADvrtZbLS8jHMWy7BsNeyRkBrmexOLb6kzmmAOjLp6RqOpVJQXZ4Gtv8xSZeaUDMVBDIDyOG3BZe1JWPAyS9Lx8uAviHJC+6fv3ZHIP6E4w=='

const me = 27920409
const lu = 141452238
const doges = [
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

// STARTUP
const bot = new TelegramBot(token, { polling: true })

bot.sendMessage(me, `[${new Date}]      TELEBOT - STARTED`)
console.log(`[${new Date}]      TELEBOT - STARTED`)

// SETUP TIMER

// HOOKS SETUP

bot.on('message', logger)
bot.onText(/^erik$/ig, onErik)
bot.onText(/doge/ig, onDoge)
bot.onText(/\/suriettiv*/ig, onSuriettiv)
bot.onText(/\/iniettiv*/ig, onIniettiv)
bot.onText(/\/trigo$/ig, onTrigo)

// HANDLERS

function onErik(msg, match) {
    const chatID = msg.chat.id
    const userID = msg.from.id

    var resp = msg.text.replace(/erik/ig, 'culo')
    bot.sendMessage(chatID, resp)
}

function onDoge(msg) {
    const chatID = msg.chat.id
    const id = Math.floor(Math.random() * doges.length)
    bot.sendDocument(chatID, doges[id], { caption: 'Praise the doge' }).then((sent) => console.log('DOGE SENT'))
}

function logger(msg, a) {
    const fromID = msg.from.id
    if (msg.chat.type === 'private') {
        if (fromID !== me && fromID !== lu) {
            const { first_name, username } = msg.from
            let text = `MSG RECEIVED: ${first_name} @ username - ID: ${fromID} \n`

            if (msg.photo) {
                text += msg.caption || ''
                bot.sendPhoto(me, msg.photo[0].file_id, { caption: text })
            } else if (msg.document) {
                text += msg.caption || ''
                bot.sendDocument(me, msg.document.file_id, { caption: text })
            } else {
                if (msg.text) text += msg.text
                bot.sendMessage(me, text)
            }

        } else {
            const text = msg.text
            if (text && text.startsWith('lucillax')) {
                const reply = text.replace('lucillax', '')
                bot.sendMessage(me, `SENT: ${reply}`)
                bot.sendMessage(lu, reply)
            }
        }
    }
}

function onSuriettiv(msg, match) {
    const chatID = msg.chat.id
    const photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Surjection.svg/220px-Surjection.svg.png'
    bot.sendMessage(chatID, photo, { caption: 'Suriettivita' })
}

function onIniettiv(msg, match) {
    const chatID = msg.chat.id
    const photo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Injection.svg/170px-Injection.svg.png'
    bot.sendMessage(chatID, photo, { caption: 'Iniettivita' })
}

function onTrigo(msg, match) {
    const chatID = msg.chat.id
    const photo = 'https://s12.postimg.org/heozwfcjh/Screen_Shot_2016_10_06_at_14_01_39.png'
    bot.sendMessage(chatID, photo, { caption: 'Non imparerai mai la trigonometria, merda!' })
}

function customReminder() {
    bot.sendMessage(me, "Pillola 💚")
        // bot.sendMessage(lu, "Pillola 💚")
}