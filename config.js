const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "jlJxRJiB#qXTB_EVy7O_GOXCBCHRzlDy81OCmXFRG2Laj2mpEXJU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4bc81k.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello there, ‘👑 QUEEN-MAYA-MD Is Alive NowðŸ*\n\TYPE . AND menu TO BEGIN.",
BOT_OWNER: '94716717099',  // Replace with the owner's phone number



};

