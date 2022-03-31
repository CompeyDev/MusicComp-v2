 'use strict';
 const inquirer = require('inquirer');
 const Log = require('../lib/logging');
 const { run, npmCommand } = require('../lib/util');
// Log.progress('Make sure you filled out /src/musiccomp-discord-bot/botconfig.js, before running the bot.')
module.exports = {
ask: () => {
 const questions = [
   {
     type: 'confirm',
     name: 'start',
     message: 'Start the bot?',
     choices: [
       {
         key: 'y',
         name: 'Start the bot',
         value: 'yes',
       },
       {
         key: 'n',
         name: 'Quit',
         value: 'no',
       },
     ],
   },
 ];
 
 inquirer.prompt(questions).then((answers) => {
   console.log(answers);
   const response = JSON.stringify(answers)
   console.log(response)
   if (response.start == true) {
       run('cd', ['./src/musiccomp-discord-bot'])
       run(npmCommand, ['start'])
   }
 });
},
}

