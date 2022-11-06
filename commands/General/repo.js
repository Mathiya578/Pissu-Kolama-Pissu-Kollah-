
const { tlang,botpic } = require('../../lib')
module.exports = {
    name: 'repo',
    category: 'general',
    alias: ["script", "git", "sc"],
    desc: 'Sends userbot github repo link.',
    async exec(citel, Void) {
        
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: `Hey ${citel.pushName}\n*This is Pissu Kolama@Pissu Kollah Repo*\n\n*Repo:* https://github.com/Mathiya578/Pissu-Kolama-Pissu-Kollah-\n\n*Whatsapp Group:* https://chat.whatsapp.com/IX3xBGKd9U44gJmdhsHiHp\n\n*Deploy Your Own:*-\nSecktorBot.herokuapp.com/deploy `,
            footer: ` ` + tlang().footer,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "Pissu Kolama@Pissu Kollah-Repo",
                body: "Easy to Use",
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://github.com/Mathiya578/Pissu-Kolama-Pissu-Kollah-`,
                sourceUrl: `https://github.com/Mathiya578/Pissu-Kolama-Pissu-Kollah-`,
              },
            },
          };
          await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
          });
 
    }
 }
      
