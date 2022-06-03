let handler = async(m, { conn, text, usedPrefix, command }) => {
return m.reply('Gapunya case nya:l')
await conn.deleteChat(m.chat) 
}

handler.help = ['clearchat']
handler.tags = ['owner']
handler.command = /^(clearchat)$/i

export default handler