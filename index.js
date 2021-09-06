// npm install -g localtunnel && lt --port 3000
const { Telegraf } = require('telegraf')
const Koa = require('koa')
const app = new Koa()


// const token = "1987804684:AAHuHy1WUfOgJJkGGmHx5e01EZvPwzGasMI"
// if (token === undefined) {
//   throw new Error('BOT_TOKEN must be provided!')
// }


const boti = {token: "1987804684:AAHuHy1WUfOgJJkGGmHx5e01EZvPwzGasMI", mensaje: "hola0", id: 1}

const bott = {token: "1979561848:AAH4rJinuNdrHQGbBRI2VFKCU9xpAK3QGT4", mensaje: "hola1", id: 2}


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


function comedor(unBot) {
    const bot = new Telegraf(unBot.token)

    bot.on('text', (ctx) => ctx.replyWithHTML(unBot.mensaje))

    bot.launch({
    webhook: {
        domain: 'https://botdebots.herokuapp.com/' + unBot.id,
        port: 3000 + unBot.id
    }
    })
}

comedor(boti)
comedor(bott)



