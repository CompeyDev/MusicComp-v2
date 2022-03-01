# Self Hosting Instructions
1. Clone and checkout the release branch (or download the the latest release at [releases](https://github.com/TheAwesomeCoder05/MusicComp-v2/releases)):


```
git clone https://github.com/TheAwesomeCoder05/MusicComp-v2.git
cd MusicComp-v2
git checkout release
``` 
**OR**
<br>
Use releases with `wget`.
```
wget <RELEASES_URL>
```
<br>

2. CD to the directory and install the package and dependencies using:

```
yarn setup
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
npm install @compeydev/musiccomp-discord-bot@0.2.13-ghp
```
<br>

3. Edit the `botconfig.js` file and enter your Discord Token from [here](https://discord.com/developers/applications), along with a spotify API Token from [here](https://developer.spotify.com/dashboard/) and a YouTube API Token from [here](https://developers.google.com/youtube/registering_an_application).
4. Lastly run the following, to run the bot:
```
npm start
```
