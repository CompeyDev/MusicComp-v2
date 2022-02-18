## Self Hosting Instructions
1. Clone and checkout the release branch (or download the the latest release at [releases](https://github.com/TheAwesomeCoder05/MusicComp-v2/releases)):


```
git clone https://github.com/TheAwesomeCoder05/MusicComp-v2.git
git checkout release
``` 
**OR**
<br>
The most updated version using CDNs at [here](https://www.devcomp.tk/MusicComp-v2/downloads).
<br>

2. CD to the directory and install the package and dependencies using:

  <h3> i. NPM: </h3>
  
```
npm install musiccomp-discord-bot --legacy-peer-deps
```

  <h3> ii. Yarn: </h3>

```
yarn add musiccomp-discord-bot
```
Please do note that yarn package will always be 1 version ahead of the npm package. 

3. Edit the `botconfig.js` file and enter your Discord Token from [here](https://discord.com/developers/applications), along with a spotify API Token from [here](https://developer.spotify.com/dashboard/) and a YouTube API Token from [here](https://developers.google.com/youtube/registering_an_application).
4. Lastly run the following, to run the bot:
```
node index.js
```
