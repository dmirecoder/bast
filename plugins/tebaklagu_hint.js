let handler = async (m, { conn }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (!(id in conn.tebaklagu)) throw false
    let json = conn.tebaklagu[id][1]
    conn.sendButton(m.chat, '```' + json.judul.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['nyerah', 'menyerah']
    ], m)
}
handler.command = /^hint$/i

handler.limit = true

export default handler