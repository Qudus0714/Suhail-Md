const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2348061413577";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040251042";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_36_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY3LFxuICAgICAgICA2NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDU3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMzLFxuICAgICAgICA3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIis3Q1hrN3pxUnNid3dSUnpVakdiQy8xUFFPM1d2SnZ5SWpGV0dIQWw0bDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MDI1MTA0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0NzQwMDdCRkE2NjJDNDI0QUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTExMDA0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MDI1MTA0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0ExOEVGRjdFQjFCODM1NjlFRDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTExMDA3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkh4MTFtb2E3VG5lcV85UlM3bXRPdlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmRlN2ZiNzQtYjE1NC00OGU4LTk0ZjEtODRmOTMzNTM5ZGM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgNCxcbiAgICAgIDU0LFxuICAgICAgNDgsXG4gICAgICAxMTMsXG4gICAgICAyNDEsXG4gICAgICAxMjMsXG4gICAgICAyMjIsXG4gICAgICAyMDUsXG4gICAgICAzMCxcbiAgICAgIDI1MSxcbiAgICAgIDQxLFxuICAgICAgNDMsXG4gICAgICAxMDksXG4gICAgICAyMjEsXG4gICAgICAxMzEsXG4gICAgICA5MCxcbiAgICAgIDEzNyxcbiAgICAgIDEwNixcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICA0MyxcbiAgICAgIDEzOCxcbiAgICAgIDY5LFxuICAgICAgMTY5LFxuICAgICAgMTI3LFxuICAgICAgMjAyLFxuICAgICAgMTg2LFxuICAgICAgMjUsXG4gICAgICAxNzgsXG4gICAgICAyMTcsXG4gICAgICAyMDIsXG4gICAgICA0LFxuICAgICAgMjExLFxuICAgICAgMTI3LFxuICAgICAgMTA4LFxuICAgICAgMTYsXG4gICAgICA0MSxcbiAgICAgIDExNCxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYV0RTMjZRVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MDI1MTA0MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDQ4NjQ3MjU4NDgxNjE6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn6aLQVlPTUlERfCfpotcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbkRnc2NCRU5hTmliVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhIcGxFMllkcnpac1JPbHcyMTNxWUI4WEtVNUVXR1dseC9DZjd1aHZMVkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNzl6TnFwQ0lPbEd2MUwvU3Bwamx5SWRpdDhSWitjWmJyNHIyczRTTE0xOERZWldqR09tOVhOZnJMUm9xVThwM2JwOXl2M2JBUGFJUExqeEhnZk5HQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVzZZb1UvK2Nhd0RHWnMwbjlWZzlyRXFBR0V4bnhVUm1uSGpLLzIvOU56a0ltOWY5THU4WjhNNjRpRjI3b1J6Qmt1QWtBTEJrZWpFK1U0T2J5OWFhamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDI1MTA0MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTExMDAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVNJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJU0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXWFljWTduYTU2Z2xUK3R1L0pReUFLS2RyTXcxMTRSSklZM2NiZGp5dWhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxNzM3NDYwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIxOTExMDAyMjEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Moruff Qudus",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
