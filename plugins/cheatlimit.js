let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    global.db.data.users[who].exp += 100000
    global.db.data.users[who].limit += 100000
    global.db.data.users[who].money += 100000
    conn.sendButton(m.chat, `*${global.db.data.users[who].limit}* Limit Tersisa`, author, null, [
        ['Chit', '.ngechit']
    ], m)
}
handler.help = ['ngechit [@user]']
handler.tags = ['xp']
handler.command = /^(ngechit)$/i
export default handler
