const os = require("os");
const bots = require("../lib/perfix");
const { runtime } = require("../lib/Function");
const Config = require('../config');
const lang = bots.getString("system_stats");
const speed = require("performance-now");

var ov_time = new Date().toLocaleString("EN", { timeZone: "Asia/Kolkata" }); // .split(' ')[1]

bots.bot(
  {
    pattern: ["alive", "bot", "system_status"],
    desc: "to know this bot is alive",
    sucReact: ["๐ป", "๐" ,"๐ฆ"],
    category: ["system", "all"],
  },
  async (message, client) => {
    try {
      let timestampe = speed();
      let Wspeed = speed() - timestampe;
      const Footer = bots.config.exif.footer;
      const Content = `โโโ
โใ ๐๐ ๐๐๐/๐๐๐ ใ
โโฌโ ใ ${message.client.pushName} ใ
โโคโ  แ แฉแฐ โจแใแแแด แแชแฏ
โโโโโโโโโโโโโโโโโโ โณน
โ ใ BOT INFO ใ
โ โช ๐ฅ๐๐ป๐๐ถ๐บ๐ฒ : ${runtime(process.uptime())}
โ โซ ๐๐ผ๐ ๐ก๐ฎ๐บ๐ฒ : `+Config.profile.botName+`
โ โฏ ๐ข๐๐ป๐ฒ๐ฟ ๐ก๐ฎ๐บ๐ฒ :`+ Config.profile.ownerName+`
โ โ ๐ข๐๐ป๐ฒ๐ฟ ๐ก๐๐บ๐ฏ๐ฒ๐ฟ : ${bots.config.exif.owner[0]}
โ ฿ท ๐๐ผ๐๐ ๐ก๐ฎ๐บ๐ฒ : ${os.hostname()}
โ  ๐ฆน ๐ฃ๐น๐ฎ๐๐ณ๐ผ๐ฟ๐บ : ${os.platform()}
โ ๐งท ๐ง๐ผ๐๐ฎ๐น ๐จ๐๐ฒ๐ฟ : ${global.mydb.users.length}
โ ๐ฃ ๐ง๐ผ๐๐ฎ๐น ๐๐ถ๐๐ : ${global.mydb.hits}
โโฌโโโโโโโโโโโโโโโ โณน
 โโ  D & T : ${ov_time}
 โโ `+ Config.profile.ownerName+`
 โโโโโโโโโโโโโโโโโ โณน`;

      const buttons = [
        { buttonId: ".urls", buttonText: { displayText: "โฐ๐๐ผ๐๐๐๐โฏ" }, type: 1, },
        { buttonId: ".creater", buttonText: { displayText: "โcสแดแดแดorโข" }, type: 1, },
        { buttonId: ".menu", buttonText: { displayText: "โmแดษดuโ" }, type: 1, },
      ]


    const templateButtons = {
      image: { url: bots.config.image.url.D_E_TMB },
      caption: Content,
      footer: bots.config.exif.footer,
      buttons,
    };

    await client.sendMessage( message.from, templateButtons, { quoted: message })
    global.catchError = false;
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
  }
);
