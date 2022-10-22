import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
const sections = [  
{
title: `𝙻𝙸𝚂𝚃𝙰 𝙳𝙴𝙻 𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂`,
rows: [
  {title: "│🧬️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂1", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex1`},
  {title: "│👹️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂2", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex2`},
  {title: "🤡️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂3", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex3`},
  {title: "│😈️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂4", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex5`},
  {title: "│💉│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂5", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex5`}, 
  {title: "│🧬│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂6", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex6`},
  {title: "│👹│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂7", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex7`},
  {title: "│🤡️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂8", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex8`},
  {title: "│😈│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂9", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex9`},
  {title: "│💉│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂10", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex10`}, 
  {title: "│🧬│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂11", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex11`},
  {title: "│👹│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂12", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex12`},
  {title: "│🤡️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂13", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex13`},
  {title: "│😈️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂15", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex14`},
  {title: "│💉️│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂15", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex15`}, 
  {title: "│🧬│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂16", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex16`},
  {title: "│👹│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂17", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex17`},
  {title: "│🤡│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂18", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex18`},
  {title: "│😈│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂19", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex19`},
  {title: "│💉│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂20", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex20`},
   {title: "│🧬│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂21", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex21`},
  {title: "│👹│𝙱𝙾𝙼𝙱𝙰𝚁𝙳𝙴𝙾-𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂22", description: "𝚎𝚜𝚝𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚜𝚘𝚕𝚊𝚖𝚎𝚗𝚝𝚎 𝚙𝚞𝚎𝚍𝚎 𝚜𝚎𝚛 𝚞𝚜𝚊𝚍𝚘 𝚙𝚘𝚛 𝚎𝚕 𝚐𝚛𝚞𝚙𝚘  𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒@ 𝚍𝚎𝚕 𝚋𝚘𝚝", rowId: `${usedPrefix}virtex22`},  
                        
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `
┌「𓈃ּ៹🍏𝑯𝒂𝒅𝒆𝒔𐂂!s⁹⁷☻‹𝟹♞ᵇᵒᵗ⁻ᴹᴰ」
├❏${ucapan()}
├❏๖ۣۜۜ͜͡𝙷𝙾𝙻𝙰✨${name}💖 
├❏──────
├❏🌱𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙳𝙴
├❏👹𝙻𝙸𝚂𝚃𝙰 𝙳𝙴𝙻 𝙱𝙸𝙽𝙰𝚁𝙸𝙾𝚂
├❏☘️𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾:
├❏${uptime}
├❏𝚅𝙴𝚁𝚂𝙸𝙾𝙽:3 𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃
└────ׂ`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu2|Menu2|menú2|Menú2\?)$/i
handler.exp = 20
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH') 
  let res = "🌉Buenas madrugadas|Good early morning🌠"
  if (time >= 4) {
    res = "🌇Buenos Días|Good Morning⛅"
  }
  if (time >= 11) {
    res = "🏙️Buenas Tardes|Good Afternoon🌤️"
  }
  if (time >= 15) {
    res = "🌆Buenas tardes|Good Afternoon🌥️"
  }
  if (time >= 17) {
    res = "🌃Buenas noches|Good Evening💫"
  }
  return res
}
