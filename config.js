// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • FahriAdison
// • The.Sad.Boy01
// • Rlxfly
// • Rasel comel
// • ImYanXiao
// • Xtreshe (Beban)
// • Dll

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*=========== WAKTU ===========*/
let wibh = moment.tz('Africa/Lagos').format('HH')
    let wibm = moment.tz('Africa/Lagos').format('mm')
    let wibs = moment.tz('Africa/Lagos').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*=========== SOCIAL ===========*/

// if you don't have it, type "-" or leave it alone so that there are credits :v
global.sig = 'https://instagram.com/Qhingthuth' //Link Instagrammu
global.sgh = 'https://github.com/Qhingthuth' //Link Githubmu
global.sgc = 'https://chat.whatsapp.com/GkXFNCI8RuIBrprFApZcN6'
'
global.sdc = '-' //Fill it out using the Discord link, if there is one, just leave it
global.snh = 'https://nhentai.net/g/HaramTod🗿' //Hmmm, This is up to you to fill in :v

/*=========== PAYMENT ===========*/
global.pdana = '085736178354' //Nomor Danamu
global.ppulsa = '085736178354' //Nomor SimCard Yang Kamu Pake
global.psaweria = 'https://saweria.com/XiaoYan021' //Link Saweriamu Kalo Nggada Ketik - aja

/*============== NOMOR ===========*/
global.nomorbot = '2349022424808' //Nomor Bot
global.nomorown = '2349038303472' //Nomor Owner
global.namebot = 'Ikratos-MD-v1' //Nama Bot
global.nameown = '𝙿𝚁𝙸𝙽𝙲𝙴 𝚆𝙰𝙻𝙴𝚇🇵🇰' // Nama Owner


/*============ CHATGPT ============*/
global.openAiapi = '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'   // Get you Api-key from 'https://platform.openai.com/account/api-keys'
global.org = 'PASTE_YOUR_ORG_HERE'   // Get you Org-Key from 'https://platform.openai.com/account/org-settings' 

/*============= STAFF =============*/
global.owner = [
  ['2349038303472', '𝚉𝚒𝚗𝚘𝚍𝚒𝚌𝚝🎐', true] //don't change this name and number
  ['19293514545', '𝙿𝚛𝚒𝚗𝚌𝚎 𝚆𝚊𝚕𝚎𝚡🎐', false] //Replace your name and number here
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = ['2349022424808','2349038303472'] //Don't replace this,If you want to add someone add any dev
global.prems = [] // Premium user is not here to add it, type .addprem @ user 10

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.lolkeysapi = ['BrunoSobrino']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkey = 'apikeymu'
global.xkey = 'APIKEYMU'
global.cricket_URL = 'https://m.cricbuzz.com/live-cricket-scores/56782/pak-vs-nz-new-zealand-tour-of-pakistan-2023' //paste new live match url here
/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  violetics : 'https://violetics.pw',
  zenz: 'https://zenzapi.xyz',
  males : 'https://malesin.xyz',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEYMU',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Apikeymu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zenzapi.xyz': '01ABEB1E11',
  'https://violetics.pw': 'beta',
  'https://api-fgmods.ddns.net': 'fg-dylux'
}
// The word APIKEY is filled with your own apikey, by buying it on the website

/*=========== WATERMARK ===========*/
global.wm = '「 𝗣𝗥𝗜𝗡𝗖𝗘-ᴍᴅ-ᴠ𝟷 」' //Main Watermark
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘𝙿𝚛𝚒𝚗𝚌𝚎.𝚆 ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = '𝗣𝗥𝗜𝗡𝗖𝗘-ᴍᴅ-ᴠ𝟷'
global.footerTXT = `𝗣𝗥𝗜𝗡𝗖𝗘-ᴍᴅ-ᴠ1 • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: +2349038303472`
global.fig = `Follow me on instagram:\n\t\tinstagram.com/qhingthuth`
global.botdate = `⫹⫺ Date: ${week} ${date}`
global.bottime = `Time : ${wktuwib}`
global.titlebot = '🎋 ┊ 𝗣𝗥𝗜𝗡𝗖𝗘 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ'
global.author = global.wm
global.logo = 'https://i.ibb.co/cc8jfkX/01.jpg'



/*============= LOGO =============*/
global.thumb = 'https://i.ibb.co/cc8jfkX/01.jpg' //Main Thumbnail
global.thumb2 = 'https://i.ibb.co/cc8jfkX/01.jpg'
global.thumbbc = 'https://i.ibb.co/cc8jfkX/01.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumblvlup = 'https://i.ibb.co/cc8jfkX/01.jpg'
global.hwaifu = ['https://i.ibb.co/cc8jfkX/01.jpg']

/*========= FlamingText ==========*/
global.flaaa = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820 
    
/*============ TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```404 error```'
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+92 347 0027813'

/*======== TYPE DOCUMENT =========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

global.thumbdoc = 'https://i.ibb.co/cc8jfkX/01.jpg'

/*========== FAKE SIZE ==========*/
global.fsizedoc = '5644' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊🇵🇰' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━═┅═❏ *ღ 𝘿𝘼𝙎𝙃𝘽𝙊𝘼𝙍𝘿 ღ* ❏═┅═━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊☯︎'                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*=========== STICKER WM ===========*/
global.stickpack = 'x_𝚆𝚊𝚕𝚎𝚡_x'
global.stickauth = `「 𝗣𝗥𝗜𝗡𝗖𝗘-ᴍᴅ-ᴠ𝟷 」`
global.packname = 'Cʀᴇᴀᴛᴇᴅ Bʏ'
global.packname2 = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𝗣𝗥𝗜𝗡𝗖𝗘'

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

//------ FUNCTION
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
