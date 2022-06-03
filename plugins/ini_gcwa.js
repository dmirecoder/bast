import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
  try {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} bot`
  let json = await fetch(`https://api-xcoders.xyz/api/search/groupwa?query=${text}&apikey=xcoders`)
  
  let jsons = await json.json()
        let x = jsons.result
  m.reply(`
Judul *${x.nama}*
_Url:_ ${x.link}
`.trim())
}
}
handler.help = ['groupwa'].map(v => v + ' <apa>')
handler.tags = ['fun']
handler.command = /^(groupwa|gcwa)$/i

export default handler