
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!text) return m.reply(`Balas gambar dengan perintah
    ${usedPrefix + command} effect
*List effect:*
angie
aria
attic
black-and-white
chrome-1970
contrast-bandw
creamy
duotone
eva
golden-hour
hana
hdr
japanese
lana
lavender
lemonade
light-leak
lisa
lomo
milk
molly
monochrome
morning
movie
orton
paretro
perfect-bandw
plumy
retrolga
ruby
sand
sapphire
sepia
soft-sepia
solarize
sphinx
venus
viewfinder
warm-sunset`)
    
    let img = await q.download?.()
    let url = await uploadImage(img)
    
    let images = `https://violetics.pw/api/photofilter/${encodeURIComponent(text)}?apikey=beta&image=${encodeURIComponent(url)}`
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix + command}`, buttonText: {displayText: '❇️ Effect'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Photomaker 」━┉⎔*
🤠 *Query* : ${url}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
//lo mau apa??
handler.help = ['phfilter (caption|reply media)']
handler.tags = ['maker']
handler.command = /^(phfilter)$/i

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}