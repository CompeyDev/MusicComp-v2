var randomlinks = [];
randomlinks[0]="https://github.com/TheAwesomeCoder05/MusicComp-v2/tree/release";
randomlinks[1]="https://cdn.jsdelivr.net/npm/musiccomp-discord-bot@0.2.9/";
randomlinks[2]="https://unpkg.com/musiccomp-discord-bot@0.2.9/";
randomlinks[3]="https://cdn.devcomp.tk/musiccomp-discord-bot/-/musiccomp-v0.2.9.tgz";
randomlinks[2]="https://cdn.devcomp.tk/musiccomp-discord-bot/-/musiccomp-v0.2.8.zip";

function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}
