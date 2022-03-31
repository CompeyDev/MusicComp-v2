 'use strict';
 const inquirer = require('inquirer');
 const Log = require('../lib/logging');
 const { run } = require('../lib/util');
 Log.progress('Make sure you filled out /src/musiccomp-discord-bot/botconfig.js, before running the bot.')
 
 const questions = [
   {
     type: 'expand',
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
   if (answers.start === 'yes') {
       run('node', ['index.js'])
   }
 });
