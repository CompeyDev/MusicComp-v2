# Self Hosting Instructions

## Bootstrapper:
1. Grab the bootstrapper by running:
```
curl https://dl.devcomp.tk/scripts/installers/MusicComp-v2/bootstrap.py -O && python bootstrap.py
```

And you're set! The bootstrapper should set up the rest for you, just make sure to fill out `botconfig.js`. 

## Manual Installation

1. Clone the repo and set it up using:

```
git clone https://github.com/CompeyDev/MusicComp-v2.git && yarn setup
```

**OR**

Manually install the packages using:

### i. NPM: 
  
```
npm install musiccomp-discord-bot
```

### ii. Yarn:

```
yarn add musiccomp-discord-bot
```
### iii. GitHub Packages:
```
npm install @compeydev/musiccomp-discord-bot
```
<br>

Use the docker image:

### i. Docker:
```
docker pull compey/musiccomp-v2
```

4. Fill out `botconfig.js` if you have not filled it out already.

5. Run `yarn start` or `npm run setup` to start the bot. 
