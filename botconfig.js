module.exports = {
  Admins: ["UserID", "UserID"], 
  ExpressServer: true, 
  DefaultPrefix: process.env.Prefix || ">", 
  Port: 3000, 
  SupportServer: "https://dsc.gg/team-comp", 
  Token: process.env.TOKEN || "", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", 
  ClientSecret: process.env.Discord_ClientSecret || "", 
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true, 
  DefaultVolume: 100, 
  CallbackURL: "/api/callback", 
  "24/7": true, 
  CookieSecret: process.env.SECRET, 
  IconURL:
    "https://cdn.discordapp.com/emojis/902088294911836170.webp?size=44&quality=lossless", 
  EmbedColor: "RANDOM", 
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://musiccomp-v2.theawesomecode1.repl.co", 
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "24/7 Music", // The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink Server Hosted by MEEE
  Lavalink: {
    id: "Main",
    host: "lavalink-replit.theawesomecode1.repl.co",
    port: 443, 
    pass: "ballskindacringe",
    secure: true, 
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};



