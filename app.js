const { App } = require('@slack/bolt');
require('dotenv').config()

// ボットトークンとソケットモードハンドラーを使ってアプリを初期化します
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.message("こんにちは", async ({ message, say }) => {
  await say(`:wave: こんにちは <@${message.user}>！`);
});

app.message(async ({ message, say }) => {
  await say(message.text);
});

app.client.chat.postMessage({ text: 'hogehoeg', channel: '#hoge' });

(async () => {
  // アプリを起動します
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();