const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();


client.build();
client.launch();

module.exports = client; //yes

// release v0.2.15
