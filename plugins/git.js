const bots = require("../lib/perfix");
const lang = bots.getString("github");
const Config = require('../config');
const axios = require("axios");

bots.bot(
  {
    pattern: ["git"],
    desc: "git link",
    usage: '<userName>',
    sucReact: "š»",
    category: ["search", "all"],
  },
  async (message, client) => {
    const uName = message.client.text;

    if (!uName) {
      global.catchError = true;
      return await client.sendMessage( message.from, { text: Config.GIT }, { quoted: message } );
    }

    await axios.get(`${ezio.config.api.github.domain}/users/${uName}`)
      .then(async (response) => {
        const { login, avatar_url, html_url, twitter_username, bio, name, company, public_repos, public_gists, followers, location, following, created_at, blog, type, email, updated_at, } = response.data;

        if (response.data.message) {
          global.catchError = true;
          return await client.sendErrorMessage( message.from, response.data.message, message.key, message );
        }

        const msg =
          `\nā *${lang.NAME}* ${name}` +
          `\n\n` +
          `ā *${lang.USERNAME}* ${login}` +
          `\n\n` +
          `ā *${lang.TWITTER}* ${twitter_username}` +
          `\n\n` +
          `ā *${lang.COMPANY}* ${company}` +
          `\n\n` +
          `ā *${lang.BIO}* ${bio}` +
          `\n\n` +
          `ā *${lang.BLOG}* ${blog}` +
          `\n\n` +
          `ā *${lang.URL}* ${html_url}` +
          `\n\n` +
          `ā *${lang.REPO}* ${public_repos}` +
          `\n\n` +
          `ā *${lang.GIST}* ${public_gists}` +
          `\n\n` +
          `ā *${lang.FOLLOWING}* ${following}` +
          `\n\n` +
          `ā *${lang.FOLLOWERS}* ${followers}` +
          `\n\n` +
          `ā *${lang.MAIL}* ${email}` +
          `\n\n` +
          `ā *${lang.LOCATION}* ${location}` +
          `\n\n` +
          `ā *${lang.JOIN}* ${created_at}` +
          `\n\n` +
          `ā *${lang.UPDATE}* ${updated_at}\n`;

        await client.sendMessage( message.from, { image: { url: avatar_url }, caption: msg + "\n" + ezio.config.exif.footer,}, { quoted: message, });
        global.catchError = false;
      })
      .catch(async (err) => {
        (global.catchError = true),
          await client.sendErrorMessage( message.from, lang.NOT + "\n\n" + err, message.key, message );
      });
  }
);
