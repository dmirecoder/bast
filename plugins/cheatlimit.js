let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    global.db.data.users[who].limit = 100000
    conn.sendButton(m.chat, `*${global.db.data.users[who].limit}* Limit Tersisa`, author, null, [
        ['Chit', '.cheatlimit']
    ], m)
}
handler.help = ['cheatlimit [@user]']
handler.tags = ['xp']
handler.command = /^(cheatlimit)$/i
export default handler
