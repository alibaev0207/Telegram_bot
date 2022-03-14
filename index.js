const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()

const text = require('./constants')

const bot = new Telegraf(process.env.BOT_TOKEN)

// bot.start(ctx => ctx.reply(`Привет ${ctx.message.from.userName}`))

bot.start(ctx => {
    ctx.reply(`Пpивет ${ctx.message.from.username}`)
})

bot.help(ctx => ctx.reply(text.commands))

// bot.command('course', async ctx => {
//     try {
//         await ctx.replyWithHTML('<b> Наши курсы <b>', Markup.
//     inlineKeyboard([
//         [Markup.button.callback('UX/UI', 'btn_ux'),
//         Markup.button.callback('HTML', 'btn_html')
//         ],
//     ]))
//     }catch (e){
//         console.error(e)
//     }
// })

// bot.command('course', async ctx => {
//     await ctx.replyWithHTML(
//       '<b>Наши курсы</b>',
//       Markup.inlineKeyboard(
//         [Markup.button.callback('UX/UI', 'btn_ux')],
//         [Markup.button.callback('Frontent', 'btn_js')],
//         [Markup.button.callback('Backend', 'btn_java')],
//       )
//     )
//   })

bot.command('course', async ctx => {
  // console.log(text.kor)
try {
  await ctx.replyWithHTML(
    '<b>Наши курсы</b>',
    // inlineKeyboard
    Markup.inlineKeyboard([
      
        [Markup.button.callback('UX_UI 👺', 'btn_ux')],
        [Markup.button.callback('English 🎃', 'btn_en')],
        [Markup.button.callback('Frontend 😈', 'btn_js')],
      

    ])
  )
}catch(e) {
  console.error(e)
}
})

const handlerActioin  = (btnName, photo, txt) => {
  bot.action(btnName, async ctx => {
    try{
      // убирает таймер с кнопки
      await ctx.answerCbQuery()
      if(photo !== false) {
        await ctx.replyWithPhoto({
          source: photo,
        })
      }
      await ctx.replyWithHTML(txt)
    } catch (e){
      console.error(e)
    }
})
}

handlerActioin('btn_ux', './img/img.jpg', text.myTxt)
handlerActioin('btn_en', './img/english.jpg', text.myTxt1)
handlerActioin('btn_js', './img/js.jpg', text.myTxt2)


bot.command('janm', async ctx =>{
  try{
    await ctx.replyWithHTML(
      '<b>MY LOVE</b>',
      Markup.inlineKeyboard([
        [Markup.button.callback('JANM  ❤️ ', 'btn_j')],
        [Markup.button.callback('MY DARLING  😍', 'btn_j')],
        [Markup.button.callback('MY LOVE    💕  ', 'btn_j')],
        [Markup.button.callback('MY LIVE   😇 ', 'btn_j')],
        [Markup.button.callback('MY WIFE  😜 ', 'btn_j')],
      ])
    )
  }catch (e){
    console.error(e)
  }
  })
  const myLove  = (btnName, photo, txt) => {
    bot.action(btnName, async ctx => {
      try{
        // убирает таймер с кнопки
        await ctx.answerCbQuery()
        if(photo !== false) {
          await ctx.replyWithPhoto({
            source: photo,
          })
        }
        await ctx.replyWithHTML(txt)
      } catch (e){
        console.error(e)
      }
  })
  }

//start
bot.launch()

myLove('btn_j', './img/ja.jpg', text.text )