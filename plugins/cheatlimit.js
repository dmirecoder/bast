import fetch from 'node-fetch'
let handler = async (m, { text }) => {
m.reply('> global.db.data.users[m.sender].limit = 100000')

}
handler.help = ['cheatlimit']
handler.tags = ['owner']
handler.command = /^cheatlimit$/i

export default handler
