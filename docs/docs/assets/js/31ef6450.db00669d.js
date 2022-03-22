"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[233],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:e},u),{},{components:n})):r.createElement(f,a({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4819:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},p="Self Hosting Instructions",s={unversionedId:"tutorial-basics/host",id:"tutorial-basics/host",title:"Self Hosting Instructions",description:"Bootstrapper:",source:"@site/docs/tutorial-basics/host.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/host",permalink:"/MusicComp-v2/docs/docs/tutorial-basics/host",editUrl:"https://github.com/CompeyDev/MusicComp-v2/tree/production/docs/docs/tutorial-basics/host.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/MusicComp-v2/docs/docs/"}},u={},c=[{value:"Bootstrapper:",id:"bootstrapper",level:2},{value:"Manual Installation",id:"manual-installation",level:2},{value:"i. NPM:",id:"i-npm",level:3},{value:"ii. Yarn:",id:"ii-yarn",level:3},{value:"iii. GitHub Packages:",id:"iii-github-packages",level:3}],m={toc:c};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"self-hosting-instructions"},"Self Hosting Instructions"),(0,i.kt)("h2",{id:"bootstrapper"},"Bootstrapper:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Grab the bootstrapper by running:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl https://dl.devcomp.tk/scripts/installers/MusicComp-v2/bootstrap.py -O && python bootstrap.py\n")),(0,i.kt)("p",null,"And you're set! The bootstrapper should set up the rest for you, just make sure to fill out ",(0,i.kt)("inlineCode",{parentName:"p"},"botconfig.js"),". "),(0,i.kt)("h2",{id:"manual-installation"},"Manual Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the repo and set it up using:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/CompeyDev/MusicComp-v2.git && yarn setup\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OR")),(0,i.kt)("p",null,"Manually install the packages using:"),(0,i.kt)("h3",{id:"i-npm"},"i. NPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install musiccomp-discord-bot\n")),(0,i.kt)("h3",{id:"ii-yarn"},"ii. Yarn:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add musiccomp-discord-bot\n")),(0,i.kt)("h3",{id:"iii-github-packages"},"iii. GitHub Packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @compeydev/musiccomp-discord-bot\n")),(0,i.kt)("p",null,"Use the docker image:"),(0,i.kt)("li",null," i. Docker: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull compey/musiccomp-v2\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out ",(0,i.kt)("inlineCode",{parentName:"p"},"botconfig.js")," if you have not filled it out already.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run setup")," to start the bot."))))}d.isMDXComponent=!0}}]);