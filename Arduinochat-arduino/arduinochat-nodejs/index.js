const TelegramBot = require('node-telegram-bot-api');
 
// replace the value below with the Telegram token you receive from @BotFather
const token = '1000334961:AAEqtd0RiNN9h4pemaQR2C1kDplEEi2bhhg';
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
 

 
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  var Mensaje=msg.text;
  console.log("entra");
  if(Mensaje == "encender"){
    bot.sendMessage(chatId, 'Encenderé el led');
      console.log("encenciendo el led");
  }else if(Mensaje == "apagar"){
    bot.sendMessage(chatId, 'Apagaré el led');
     console.log("apagar el led");
  }
  // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
});