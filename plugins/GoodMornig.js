const bots = require("../lib/perfix");
const GDM = "it sends good morning message";
const GDN = "it sends Night message";

bots.bot(
  { pattern: ["gm","GoodMornig","gdmornig"], desc: GDM, sucReact: "๐", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "โ๐Goodโ โmorningโ๐ฅฐโ ";
    r_text[1] = "โ๏ธ๐บ๐๐๐ ๐๐๐๐๐๐๐๐ ๐ ";
    r_text[2] = "๐๐ถ๐๐๐ ๐ป๐๐๐๐๐๐๐ ๐ฅฐ ";
    r_text[3] = "๐๐๐ผ๐ผ๐ฑ ๐๐บ๐ผ๐ฟ๐ป๐ถ๐ป๐ด ๐ธ ";
    r_text[4] = "๐ป๐๐ธ๐ธ๐ญ ๐ถ๐ธ๐ป๐ท๐ฒ๐ท๐ฐ ๐ ";
    r_text[5] = "๐ผ๐๐๐๐ ๐๐๐ก๐๐๐๐ ๐ถ ";
    r_text[6] = "๐โผโโโ ๐โโโกโโโโ ๐ฅฐ ";
    const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

bots.bot(
  { pattern: ["ga", "good afternoon", "afternoon"], desc: "good afternoon", sucReact: "๐", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "๐ษขแดแดแด ๐แดาแดแดสษดแดแดษด",
    r_text[1] = "๐ฅ๏ธ๊๊๊๊ ๐๊ซ๊๊๊๊๊น๊๊๊น",
    r_text[2] = "๐ธโโโโ ๐โโโฃโโกโโโโ",
    r_text[3] = "๐ณ๐ฐ๐ธ๐ธ๐ญ ๐๐ช๐ฏ๐ฝ๐ฎ๐ป๐ท๐ธ๐ธ๐ท",
    r_text[4] = "๐ผใ ใฎใฎใ ๐ฃๅๅใไนๅฐบๅ ใใๅ ",
    r_text[5] = "๐ปแถแงแงแด ๐ินิฒิตeีีิพิพี",
    r_text[6] = "๐ฎ ษ ฦกฦกษ โฃ๏ธฮฑฦฯััษณึึีฒ"
    const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

bots.bot(
  { pattern: ["ge", "good evening", "evening"], desc: "good evening", sucReact: "๐", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "๐ปษขแดแดแด ๐แดแด แดษดษชษดษข",
    r_text[1] = "โฃ๏ธ๐บ๐ฉ๐ฉ๐ท ๐๐ฏ๐ป๐ฏ๐ฎ๐ช๐ฎ๐บ",
    r_text[2] = "๐ฅฐ๏ฝ๏ฝ๏ฝ๏ฝ ๐๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ๏ฝ",
    r_text[3] = "๐ฅณ๐ฐ๐ธ๐ธ๐ญ ๐๐ฎ๐ฟ๐ฎ๐ท๐ฒ๐ท๐ฐ",
    r_text[4] = "๐ใ ใฎใฎใ ๐ไนโไนๅ๏พๅใ ",
    r_text[5] = "๐คฉแถแงแงแด ๐แแแแแฅแแถ",
    r_text[6] = "๐ ษ ฦกฦกษ ๐ษ?ทษลฤฑลษ "
    const i = Math.floor(7 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

bots.bot(
  { pattern: ["gn", "gdnight", "goodnight","gd8","gdn8"], desc: GDN, sucReact: "๐", category: ["chat", "all"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "๐๐๐ค๐ค๐ ๐๐ฃ๐๐๐๐ฉ ๐ซโจ";
    r_text[1] = "๐ค๐๐ธ๐ธ๐ญ ๐งโโ๐ท๐ฒ๐ฐ๐ฑ๐ฝ โ๏ธโจ";
    r_text[1] = "๐โกแ แ แฑ ๐โฉษจโกฯฆฦฌ ๐";
    r_text[3] = "๐ึึึีช โญ๏ธีฒรญึีฐิต ๐";
    r_text[4] = "๐แแชแชแ ๐แแแแผแข ๐ซโจ";
    const i = Math.floor(5 * Math.random());
    await client.sendMessage( message.from, { text: r_text[i] + message.client.pushName }, { quoted: message, adReply: true } );
    global.catchError = false;
  }
);
