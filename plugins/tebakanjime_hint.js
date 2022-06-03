let handler = async (m, { conn }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (!(id in conn.tebakanime)) throw false
    let json = conn.tebakanime[id][1]
    conn.sendButton(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['nyerah', 'menyerah']
    ], m)
}
handler.command = /^hint$/i

handler.limit = true

export default handler