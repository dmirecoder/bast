import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  if (command == 'apkfap') {
let json = await fetch(`https://violetics.pw/api/apk/apkfap?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        //apkfap 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Apkfap 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.version}
${x.url}
`.trim(), m)
}
if (command == 'apkgoogle') {
let json = await fetch(`https://violetics.pw/api/apk/apkgoogle?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        //apkgoogle 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Apkgoogle 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.type}
${x.url}
`.trim(), m)
}
if (command == 'apkmody') {
let json = await fetch(`https://violetics.pw/api/apk/apkmody?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = Buffer.alloc(0)
        //apkmody 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Apkmody 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.version}
${x.url}
${x.description}
`.trim(), m)
}
if (command == 'dlandroid') {
let json = await fetch(`https://violetics.pw/api/apk/dlandroid?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        //dlandroid 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Dlandroid 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.tag}
${x.date}
${x.url}
${x.description}
`.trim(), m)
}
if (command == 'happymod') {
let json = await fetch(`https://violetics.pw/api/apk/happymod?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = Buffer.alloc(0)
        //happymod 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Happymod 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.rate}
${x.url}
${x.description}
`.trim(), m)
}
if (command == 'hostapk') {
let json = await fetch(`https://violetics.pw/api/apk/hostapk?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        //hostapk 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Hostapk 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.url}
${x.description}
${x.date}
${x.author}
`.trim(), m)
}
if (command == 'idlemod') {
let json = await fetch(`https://violetics.pw/api/apk/idlemod?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        //idlemod 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Idlemod 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.url}
${x.version}
`.trim(), m)
}
if (command == 'moddroid') {
let json = await fetch(`https://violetics.pw/api/apk/moddroid?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        //moddroid 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Moddroid 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.url}
${x.version}
`.trim(), m)
}
if (command == 'revdl') {
let json = await fetch(`https://violetics.pw/api/apk/revdl?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        //revdl 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Revdl 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.url}
`.trim(), m)
}
if (command == 'toraccino') {
let json = await fetch(`https://violetics.pw/api/apk/toraccino?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        //toraccino 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Toraccino 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.url}
${x.description}
${x.date}
${x.tags}
${x.author}
`.trim(), m)
}
if (command == 'uapkpro') {
let json = await fetch(`https://violetics.pw/api/apk/uapkpro?apikey=beta&apps=${text}`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        //uapkpro 
        conn.sendFile(m.chat, images, 'error.jpg', `*⎔┉━「 Uapkpro 」━┉⎔*
🤠 *Query* : *${x.title}*
${x.url}
${x.tags}
`.trim(), m)
}
}
handler.command = handler.help = ['apkfap', 'apkgoogle', 'apkmody', 'dlandroid', 'happymod', 'hostapk', 'idlemod', 'luckymodapk', 'moddroid', 'revdl', 'toraccino', 'uapkpro']
handler.tags = ['internet']

export default handler