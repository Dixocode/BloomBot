`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { yta } = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/youmaker`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const getVideoId = require(`get-video-id`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const request = require("request");
const nowbyk = Date.now() / 10000;
const yts = require(`yt-search`);
const axios = require(`axios`);
const fs = require(`fs`);
const now = Date.now();
let mime = ``;
const RegexYouTube =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `ytaudio`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}ytaudio <link>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      `🐙============================================================================================================================<⚡>`;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      const { id } = getVideoId(arg[0]);
      const LinkForGroups = await yts(arg.join(` `));
      const PrivatesVideos = LinkForGroups.videos.slice(0, 1);
      const LinkForPrivates = await yts(arg.join(` `));
      const GroupVideos = LinkForPrivates.videos.slice(0, 1);
      const 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const 𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
      `🐙============================================================================================================================<⚡>`;
      if (arg.length === 0) {
        const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
        return nahargs
          .nahargs(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            ꜱᴇɴᴅᴇʀɪᴅ,
            ꜱᴇɴᴅᴇʀeceived,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        `🐙============================================================================================================================<⚡>`;
      } else if (!RegexYouTube.test(arg[0])) {
        const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
        return nahargs
          .nahargs(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            ꜱᴇɴᴅᴇʀɪᴅ,
            ꜱᴇɴᴅᴇʀeceived,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        `🐙============================================================================================================================<⚡>`;
      } else {
        GroupVideos.forEach(async function (youfound) {
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*🍁𝓜𝖎𝖟𝖚ӄ𝖎™*

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀeceived}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗲𝗰𝗸 𝗬𝗼𝘂𝗿 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝗔𝘂𝗱𝗶𝗼!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${youfound.title}
🙈𝐕𝐢𝐞𝐰𝐬⤞ ${youfound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫⤞ ${youfound.author.name}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        });
        `🐙============================================================================================================================<⚡>`;
        const YouFetchers = async (
          filename,
          to,
          url,
          text = ``,
          mention = []
        ) => {
          if (mention.length > 0) {
            text = normalizeMention(to, text, mention);
          }
          var Download_Video = function (uri, filename, callback) {
            request.head(uri, function (ℓαвєяяσя, gotResp, body) {
              mime = gotResp.headers[`content-type`];
              request(uri)
                .pipe(fs.createWriteStream(filename))
                .on(`close`, callback);
            });
          };
          Download_Video(url, filename, async function () {
            let media = fs.readFileSync(filename);
            let type = mime.split(`/`)[0] + `Message`;
            if (mime === `image/gif`) {
              type = MessageType.video;
              mime = Mimetype.gif;
            }
            if (mime.split(`/`)[0] === `audio`) {
              mime = Mimetype.mp4Audio;
            }
            await ӄʀǟӄɨռʐ
              .sendMessage(to, media, type, {
                quoted: chat,
                mimetype: mime,
                caption: text,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              })
              .then(fs.unlinkSync(filename))
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
        };
        if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
          const filename = `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${now}_ytaudio_private_${nowbyk.toString()}${ꜱᴇɴᴅᴇʀɪᴅ}`;
          yta(arg[0]).then(async (gotResp) => {
            const { dl_link, thumb, title, filesize } = gotResp;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((alpha) => {
                if (Number(filesize) >= 100000) {
                  return ӄʀǟӄɨռʐ
                    .sendMessage(
                      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                      {
                        caption: thumb,
                      },
                      MessageType.image,
                      {
                        quoted: chat,
                        contextInfo: {
                          mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                        },
                        mimetype: Mimetype.png || Mimetype.jpeg,
                        content: `*🍁𝓜𝖎𝖟𝖚ӄ𝖎™*

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀeceived}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗙𝗶𝗹𝗲. 𝗠𝗮𝘅 𝗟𝗶𝗺𝗶𝘁 (𝟭𝟬𝟬𝗺𝗯)!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`,
                      }
                    )
                    .catch((ℓαвєяяσя) =>
                      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎)
                    );
                } else {
                  GroupVideos.forEach(function () {
                    Fetched = `⭕𝗔𝘂𝗱𝗶𝗼`;
                    YouFetchers(filename, ꜱᴇɴᴅᴇʀɪᴅ, dl_link, Fetched);
                  });
                }
              });
          });
        }
        `🐙============================================================================================================================<⚡>`;
        if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
          const filename = `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${now}_ytaudio_group_${nowbyk.toString()}${ꜱᴇɴᴅᴇʀɪᴅ}${ꜱᴇɴᴅᴇʀeceived}`;
          yta(arg[0]).then(async (gotResp) => {
            const { dl_link, thumb, title, filesize } = gotResp;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((alpha) => {
                if (Number(filesize) >= 100000) {
                  return ӄʀǟӄɨռʐ
                    .sendMessage(
                      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                      {
                        caption: thumb,
                      },
                      MessageType.image,
                      {
                        quoted: chat,
                        contextInfo: {
                          mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                        },
                        mimetype: Mimetype.png || Mimetype.jpeg,
                        content: `*🍁𝓜𝖎𝖟𝖚ӄ𝖎™*

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀeceived}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗙𝗶𝗹𝗲. 𝗠𝗮𝘅 𝗟𝗶𝗺𝗶𝘁 (𝟭𝟬𝟬𝗺𝗯)!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`,
                      }
                    )
                    .catch((ℓαвєяяσя) =>
                      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎)
                    );
                } else {
                  PrivatesVideos.forEach(function () {
                    Fetched = `⭕𝗔𝘂𝗱𝗶𝗼`;
                    YouFetchers(filename, ꜱᴇɴᴅᴇʀɪᴅ, dl_link, Fetched);
                  });
                }
              });
          });
        }
      }
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
