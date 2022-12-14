const yts = require("yt-search");
const bots = require("../lib/perfix");
const lang = bots.getString("scrapers");

bots.bot(
  { 
    pattern: ["play", "ytplay", "sc", "yt"], 
    desc: "you can dowloade audio from youtube", 
    usage: '<url|query>',
    sucReact: "ð", 
    category: ["search", "all"] 
},
  async (message, client) => {
    try {
      if (!message.client.text) { await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message ); return global.catchError = true; }
      let video = {};
      let results = {};
      let result;
      let buttons = [];
      if (message.client.args[0] == "x/65v79") {
        video = await yts({ videoId: message.client.args[1] });
        result = video;
        buttons = [
          { buttonId: `.ytmp3 ${result.url}`, buttonText: { displayText: "ð¼ Audio ðµ" }, type: 1, },
          { buttonId: `.ytmp4 ${result.url}`, buttonText: { displayText: "ð Video ð½ï¸" }, type: 1, },
        ];
      } else {
        results = await yts(message.client.text);
        result = results.videos[0];
        buttons = [
          { buttonId: `.ytmp3 ${result.url}`, buttonText: { displayText: "á´á´á´Éªá´" }, type: 1, },
          { buttonId: `.ytmp4 ${result.url}`, buttonText: { displayText: "á´ Éªá´á´á´" }, type: 1, },
          { buttonId: `.rytplay ${message.client.text}`, buttonText: { displayText: "É´á´xá´ ê±á´É´É¢" }, type: 1, },
        ];
      }
      let Message = {
        image: { url: result.thumbnail },
        caption: `
  âââââââââââââââââââââââââ
  â° á´Éªá´Êá´ : ${result.title}
  â° á´á´á´ á´á´á´ : Search [first result]
  â° Éªá´ : ${result.videoId}
  â° á´ Éªá´á´á´ Êá´É´É¢á´Ê : ${result.timestamp}
  â° á´ Éªá´á´¡á´s : ${result.views}
  â° á´á´Êá´á´á´á´á´ á´á´á´á´ : ${result.ago}
  â° á´Êá´á´á´á´Ê : ${result.author.name}
  â° á´Êá´É´É´á´Ê : ${result.author.url}
  â° á´Éªsá´ÊÉªá´á´Éªá´É´ : ${result.description}
  â° ÊÉªÉ´á´ : ${result.url}
  âââââââââââââââââââââââââ`,
        footer: bots.config.exif.footer,
        buttons: buttons,
      };

      await client.sendMessage(message.from, Message, { quoted: message});
    } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message ); }
  }
);
bots.bot(
  {
    pattern: ["play", "ytplay", "sc", "yt"], 
    desc: "For list search. you can use",
    usage: '<query>',
    sucReact: "ð",
    category: ["search", "all"],
  },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, lang.NEED_TEXT_SONG, message.key, message ); };
    try {
      const results = await yts(message.client.text);
      let result = results.videos;
      let rows = [];
      result.map((video) => {
        let obj = { title: video.title, rowId: `song ${video.videoId}`, description: video.description, };
        rows.push(obj);
      });
      const sections = [ { title: "Videos", rows: rows, }, ];
      const listMessage = {
        text: "yá´á´á´á´Êá´ ê±á´Êá´Êá´á´ á´ Éªá´á´á´ê±",
        footer: bots.config.exif.footer,
        title: "-----ÉªÉ´ÊÊ - á´á´-----",
        buttonText: "ÊÉªê±á´Êá´ ÊÉªá´á´ á´ ÊÉªê±á´ð¥µ",
        sections,
      };
      await client.sendMessage(message.from, listMessage, { quoted: message, });
      global.catchError = true;
    } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message ); }
  }
);
