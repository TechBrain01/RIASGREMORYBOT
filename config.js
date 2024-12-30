//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2349158564687";
global.owner = process.env.OWNER_NUMBER || "2349158564687";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01Kdm9EanFvMzZIenVPZTZUcjREU3dxdGtBZEVhNExaajhJRUQrWUVHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienNZVXRHeXNNL0dMWldkV1lSdFJDYit3YVU5TEFOZWc0Y1ZvZXNQeDh3UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSDFRRVdVSEczVUZNYmMzWnJUdmJOQXF5UU9OTlZaQlpkK1M5d0tzSG5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlWDVQRWpWMGh4UGF0M1JqRmR4b1dxWlBVelJJbFpIM0ZGWFVUankxTHlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKdFF2TFhhVlkzR2FCUWVLVmVYQ2NIcFBrd2dJelJEN2czZmRxWU9KMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpITVZuZGJyeDVYb2hRcnBNL2hHcnIyVjgzYzhFOXBWb2VFNS9GVW1qaW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0wxTWRVTmVOOE56UnRYcWZQK3htU1V2NUtrc1RUZW5VZ0pGZWRpbzFrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkFoWlhwQ0hwYXBFZmh3NUZ2WnMraFF3Um5HczZkZFdIdXk3UkRWWXlXcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp4V3grRWZPa3BnazVyNWt0OXdYcVVncFp3cXp4RUNKcmpUL1FZQWw4NDJ0cTEzWGtCaVl5NXpydyt3dkQvVm5CVGlxS01LU1hEa0JnU2xjREJZdGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6Ikd4eUE4blkzR3VvWm9RVGw5Qi9oaWZqZ09LVGhMODJmRkRQV0RjVTZtSTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRoWkh2b0I1VC1xZWtaYWFleV9hUHciLCJwaG9uZUlkIjoiMGM1ZjIzMGYtMTczNi00M2ViLTgwODItM2NjN2Y5MjFhYzAwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVqNHVnZS9HcnF2eExhcHkxUWRlRy81WkNEND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYeGFnMEk2SkZiZGc4RDRUMEhNNHFoZ3pLR2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjNYQlI1TkYiLCJtZSI6eyJpZCI6IjIzNDkxNTg1NjQ2ODc6MjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGVjaEJyYWluIE1lZGlhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQL0J5TDRCRVArVnpMc0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQQ2R5bTFFdlp3T3F2RVlWRTJQRlZDNDB0VGJZMFU2Z1pzUFc1d1BlY1E0PSIsImFjY291bnRTaWduYXR1cmUiOiJJTGg5dmw4WkY5TW1HOTJzNVdJUVczdzVLVS9weGkyVXU2UFlreEh1TXN6a0dlRFlUVGJYbnVRY01mTTZkQlp2eG1IRTVKRHYxWjd5RUlmSkIvbjNDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY2tUTU85RGRTdzBzU2dZSTZSQlVDQWh4ckZibDRVZVlBV2w4UmxtZmgxWWZ6YytkcHVDUUxIaFNTR1VSb0Y0WVhId0xmdC9pd3Eya2UwT2tVaTkvZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTU4NTY0Njg3OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlR3bmNwdFJMMmNEcXJ4R0ZSTmp4VlF1TkxVMjJORk9vR2JEMXVjRDNuRU8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU1OTI3MTZ9"
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬TechBrain Media",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "TechBrainMedia",
  botname: process.env.BOT_NAME || "TechBrain Bot",
  ownername: process.env.OWNER_NAME || "TechBrain Media",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
