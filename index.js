// npm install -g localtunnel && lt --port 3000
const { Telegraf } = require('telegraf')
const Koa = require('koa')
const app = new Koa()

let port = process.env.PORT || 80

// const token = "1987804684:AAHuHy1WUfOgJJkGGmHx5e01EZvPwzGasMI"
// if (token === undefined) {
//   throw new Error('BOT_TOKEN must be provided!')
// }


const bot1 = {token: "1987804684:AAHuHy1WUfOgJJkGGmHx5e01EZvPwzGasMI", mensaje: "hola0", id: 1}

const bot2 = {token: "1979561848:AAH4rJinuNdrHQGbBRI2VFKCU9xpAK3QGT4", mensaje: "hola1", id: 2}


const arrayBots = [{token: "1987804684:AAHuHy1WUfOgJJkGGmHx5e01EZvPwzGasMI", mensaje: "hola0", id: 1}, {token: "1979561848:AAH4rJinuNdrHQGbBRI2VFKCU9xpAK3QGT4", mensaje: "hola1", id: 2}]

// arrayBots.forEach((b) => {
//     const bot = new Telegraf(b.token)

//     bot.on('text', (ctx) => ctx.replyWithHTML(b.mensaje))

//     bot.launch({
//     webhook: {
//         domain: 'https://nice-dingo-32.loca.lt/telegraf/' + b.id,
//     }
//     })
// })


// function comedor(unBot) {
//     const bot = new Telegraf(unBot.token)

//     bot.on('text', (ctx) => ctx.replyWithHTML(unBot.mensaje))

//     bot.launch({
//     webhook: {
//         domain: 'https://botdebots.herokuapp.com/' + unBot.id,
//         port: 3000 + unBot.id
//     }
//     })
// }



const bot = new Telegraf(bot1.token)

bot.on('text', (ctx) => ctx.replyWithHTML(bot1.mensaje))

bot.launch({
webhook: {
    domain: 'https://botdebots.herokuapp.com/' + bot1.id,
    port
}
})

// const boti = new Telegraf(bot2.token)

// boti.on('text', (ctx) => ctx.replyWithHTML(bot2.mensaje))

// boti.launch({
// webhook: {
//     domain: 'https://botdebots.herokuapp.com/' + bot2.id,
//     port
// }
// })



