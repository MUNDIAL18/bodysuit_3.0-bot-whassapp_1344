let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '🍀𝐓𝐇𝐄-𝘽𝙊𝘿𝙔𝙎𝙐𝙄𝙏 -𝐁𝐎𝐓-𝐌𝐃✨', body: '📚𝙾𝙵𝙲 ALEX ✨', sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2.git`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '🍀𝐓𝐇𝐄-𝘽𝙊𝘿𝙔𝙎𝙐𝙄𝙏 -𝐁𝐎𝐓-𝐌𝐃✨', body: '📚𝙾𝙵𝙲 ALEX ✨', sourceUrl: `https://github.com/Yovanihades1212/HADES-BOT-MDV2.git`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
