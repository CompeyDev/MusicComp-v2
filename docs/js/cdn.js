var randomlinks = [];
randomlinks[0]="https://bundle.run/musiccomp-discord-bot@0.2.9";
randomlinks[1]="https://cdn.jsdelivr.net/npm/musiccomp-discord-bot@0.2.9/";
randomlinks[2]="https://unpkg.com/musiccomp-discord-bot@0.2.9/";

function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}
