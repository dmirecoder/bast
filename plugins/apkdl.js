import fetch from "node-fetch"
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Command nya', m)

	await fetch(`https://nzcha-apii.herokuapp.com/apk-search?q=${text}`).then ((res) => {
	 	let hasil = `
Nama App : ${res.result.name}
Link : ${res.result.url}
Download : ${res.result.dl_url}
Desc : ${res.result.desc}
`.trim()
let image = res.result.thumb
    conn.sendButton(m.chat, image, hasil,wm,'Menu', '.menu', m)

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['rexdl apk']
handler.tags = ['tools']
handler.command = /^(apkdl)$/i
handler.owner = false

handler.exp = 0
handler.limit = false

export default handler
