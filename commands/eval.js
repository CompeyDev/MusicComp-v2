const { MessageEmbed, MessageAttachment } = require("discord.js");
const botconfig = require("../botconfig.js")

module.exports = {
    name: "eval",
    description: "Run some code",
    usage: "",
    permissions: {
      channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
      member: [],
    },
    aliases: ["run", "exec", "inj"],
  run: async (client, message, args) => {
                  const owners = [
            botconfig.Admins,
            ]
        if(!owners.includes(message.author.id)) return;
    try {
      const code = args.join(" ");
      if (!code) {
        return message.channel.send("give some code to evaluate you bitch");
      }
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      message.channel.send({ content: `\`\`\`fix\n${evaled}\`\`\`` });
      
      const output =  new MessageAttachment(Buffer.from(evaled), 'evaluated.js')
      if(evaled.length > 1900) return message.channel.send({ files: [output] })
    } catch (err) {
      message.channel.send(`An error occured! \`\`\`xl\n${err}\n\`\`\``);
    }
  },
};