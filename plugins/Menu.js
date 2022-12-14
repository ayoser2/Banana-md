const bots = require("../lib/perfix");
const Lang = bots.getString("_whats");
// const fs = require("fs");
// const path = require("path");
let cTitle = { "search": "Search",  "all": 'All', "downloade": "Downloade", "chat": "Chat", "apks" : "apks" , "system": "System", 'fun': "Fun", '18+': "18+", 'owner': "Owner", 'create': "Create", 'group': "Group", "logo": "Logo", }

bots.bot({ pattern: ["menu", 'help', 'panel'], desc: Lang.DESCC, sucReact: "π₯Ά", category: ["all", "system"] }, async (message, client) => {
  
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = `
βββββββββββββββ
  Κα΄Ι΄α΄Ι΄α΄-Κα΄α΄ α΄α΄
βββββββββββββββ
ββ(β―οΈα΄ΚΚ α΄α΄α΄α΄α΄Ι΄α΄sβ―οΈ)
β
`;
    bots.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes('all')) { command.pattern.map((cmd) => CMD_HELP += "β *π₯βͺ* ```" + prefix + cmd + ' ' + command.usage + "```\n")}
    }); 
    CMD_HELP += "β\nβ βοΈα΄Κα΄α΄α΄α΄α΄ ΚΚ α΄.Ι’.α΅ΚΈα΅α΅ΚΈα΅\nβββββββββββ";
    await client.sendMessage( message.from,{ image: { url: bots.config.image.url.D_E_DP_ }, caption: CMD_HELP, }, { quoted: message });
});


bots.categories.map(category => {
  if (category == 'all') return;
  bots.bot({ pattern: [`${category}-menu`], sucReact: "π§Ώ", category: ["all", "system"] }, async (message, client) => {
  
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP = `
ββββββββββββββββββββ
  Κα΄Ι΄α΄Ι΄α΄-Κα΄α΄ α΄α΄α΄α΄α΄Ι΄α΄ ΚΙͺsα΄
ββββββββββββββββββββ
ββ(β${cTitle[category]} Commandsβ)
β
`;
    bots.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes(category)) { command.pattern.map((cmd) => CMD_HELP += "β *π¦ βοΈοΈοΈ* ```" + prefix + cmd + ' ' + command.usage + "```\n")}
    }); 
    CMD_HELP += "β\nβ π α΄Κα΄α΄α΄α΄α΄ ΚΚ α΄.Ι’.α΅ΚΈα΅α΅ΚΈα΅\nβββββββββββ";
    await client.sendMessage( message.from,{ image: { url: bots.config.image.url.D_E_DP_ }, caption: CMD_HELP, }, { quoted: message });
    global.catchError = false;
  });
})


bots.bot({ pattern: [`cmds-count`], sucReact: "πΈ", category: ["all", "system"] }, async (message, client) => {
  try {
    await client.sendMessage( message.from, { text: bots.infoMessage('Counting commands π₯') }, { quoted: bots.config.quoted.product });
    let all_cmd = 0;
    let visible_cmd = 0;
    let invisible_cmd = 0;
    let search_cmd = 0;
    let downloade_cmd = 0;
    let chat_cmd = 0;
    let system_cmd = 0;
    let fun_cmd = 0;
    let eighteenplus_cmd = 0;
    let owner_cmd = 0;
    let create_cmd = 0;
    let group_cmd = 0;
    let logo_cmd = 0;
    let countcmdOfCmd = 0;
    bots.commands.map(command => {
      if (command.category.includes("all")) all_cmd += command.pattern.length;
      if (!command.dontAddCommandList) visible_cmd += command.pattern.length;
      if (command.dontAddCommandList) invisible_cmd += command.pattern.length;
      if (command.category.includes("search")) search_cmd += command.pattern.length;
      if (command.category.includes("downloade")) downloade_cmd += command.pattern.length;
      if (command.category.includes("chat")) chat_cmd += command.pattern.length;
      if (command.category.includes("system")) system_cmd += command.pattern.length;
      if (command.category.includes("fun")) fun_cmd += command.pattern.length;
      if (command.category.includes("18+")) eighteenplus_cmd += command.pattern.length;
      if (command.category.includes("owner")) owner_cmd += command.pattern.length; 
      if (command.category.includes("create")) create_cmd += command.pattern.length; 
      if (command.category.includes("group")) group_cmd += command.pattern.length; 
      if (command.category.includes("logo")) logo_cmd += command.pattern.length; 
      countcmdOfCmd += command.pattern.length;
    });
    let text = `------- Command Count -------

βοΈ All Commands: ${all_cmd.toString()}
βοΈ Visible Commands: ${visible_cmd.toString()}
βοΈ Invisible Commands: ${invisible_cmd.toString()}
βοΈ Search Commands: ${system_cmd.toString()}
βοΈ Downloade Commands: ${downloade_cmd.toString()}
βοΈ Chat Commands: ${chat_cmd.toString()}
βοΈ System Commands: ${system_cmd.toString()}
βοΈ Fun Commands: ${fun_cmd.toString()}
βοΈ Adult Commands: ${eighteenplus_cmd.toString()}
βοΈ Owner Commands: ${owner_cmd.toString()}
βοΈ Create Commands: ${create_cmd.toString()}
βοΈ Group Commands: ${group_cmd.toString()}
βοΈ Logo Commands: ${logo_cmd.toString()}

π’ Count Of All Commands: ${countcmdOfCmd.toString()}
`;
    const buttons = [
      { buttonId: ".extra_urls", buttonText: { displayText: "α΄ΚΚκ±" }, type: 1, },
      { buttonId: ".system-menu", buttonText: { displayText: "κ±yκ±α΄α΄α΄ α΄α΄Ι΄α΄" }, type: 1, },
    ];
    const Message = {
      image: { url: bots.config.image.url.D_E_DP_ },
      caption: text,
      footer: bots.config.exif.footer,
      buttons,
    };
    await client.sendMessage( message.from, Message, { quoted: message })
    global.catchError = false;
  } catch (error) { 
    global.catchError = true; 
    let countcmdOfCmd = 0;
    bots.commands.map((command) => { countcmdOfCmd += command.pattern.length });
    await client.sendMessage(message.from, {text: countcmdOfCmd.toString()}, { quoted: message });
    return await client.sendErrorMessage( message.from, error, message.key, message);
  }
});
