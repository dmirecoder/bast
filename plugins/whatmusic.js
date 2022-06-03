let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Balas music yang ingin dicari dengan caption *${usedPrefix + command}*`
  if (!text) throw `Balas music yang ingin dicari dengan caption *${usedPrefix + command}*`
 m.reply('Wait Ngap, Lagi Cari....')
 let res = await fetch(`https://api.audd.io/?url=${text}&return=apple_music&api_token=945881d8079d620d74e93a218c42f8c6`)
  let json = await res.json()
  let x = json.result
 return m.reply(`*Lagu Ditemukan!*\n\n*Judul* : ${x.title}\n*Artist* : ${x.artist}\n*Label* : ${x.label}\n*Album* : ${x.album}\n*Release* : ${x.release_date}\n*Link* : ${x.song_link}`)
 
}
handler.help = ['whatmusic', 'judullagu']
handler.tags = ['tools']

handler.command = /^(whatmusic|judullagu)$/i

export default handler
