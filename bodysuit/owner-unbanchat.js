let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no está registrado en la base de datos!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*Este chat no está baneado!!*')
  chat.isBanned = false
  m.reply(`│✔️│𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝 𝚏𝚞𝚎 𝚍𝚎𝚜 𝚋𝚊𝚗𝚎𝚊𝚍𝚘 𝚎𝚡𝚒𝚝𝚘𝚜𝚊𝚖𝚎𝚗𝚝𝚎🌴`)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = true
export default handler
