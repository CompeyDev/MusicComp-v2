var randomlinks = [];
randomlinks[0]="https://github.com/TheAwesomeCoder05/MusicComp-v2/tree/release";
randomlinks[1]="https://cdn.jsdelivr.net/npm/musiccomp-discord-bot@0.2.9/";
randomlinks[2]="https://unpkg.com/musiccomp-discord-bot@0.2.9/";

var downloadlinks = [];
randomlinks[0]="https://github.com/TheAwesomeCoder05/MusicComp-v2/archive/refs/heads/release.zip";
randomlinks[1]="https://registry.npmjs.org/musiccomp-discord-bot/-/musiccomp-discord-bot-0.2.9.tgz";
randomlinks[2]="https://github.com/TheAwesomeCoder05/MusicComp-v2/releases/download/v0.2.8/musiccomp-v0.2.8.zip/";

function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}

function downloadlink(){
  window.open(downloadlinks[Math.floor(Math.random()*downloadlinks.length)]);
}
