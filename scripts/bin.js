const fs = require('fs');
const Log = require('../lib/logging');
const path = require('path');
const util = require('../lib/util');
const prompt = require('../scripts/start');

Log.progress('Cloning and checkout out release branch')

const CoreDir = path.resolve(__dirname, '..', 'src', 'musiccomp-discord-bot')
const CoreRef = 'release'

if (!fs.existsSync(path.join(CoreDir, '.git'))) {
  Log.status(`Cloning core [${CoreRef}] into ${CoreDir}...`)
  fs.mkdirSync(CoreDir)
  util.runGit(CoreDir, ['clone', 'https://github.com/CompeyDev/MusicComp-v2.git', '.'])
  util.runGit(CoreDir, ['checkout', CoreRef])
}


const CoreSha = '3826ffde4c4027529303f2bc8cc71dd062a360cc'
Log.progress(`Resetting core to "${CoreSha}"...`)
let checkoutResult = util.runGit(CoreDir, ['checkout', CoreSha], true)
// Handle checkout failure
if (checkoutResult === null) {
  Log.error('Could not checkout: ' + CoreSha)
}
// Checkout was successful
Log.progress(`...musiccomp core is now at commit ID ${CoreSha}`)

let npmCommand = 'npm'
if (process.platform === 'win32') {
  npmCommand += '.cmd'
}

util.run(npmCommand, ['install'], { cwd: CoreDir })

Log.progress("Successfully setup MusicComp for development!")

//util.run(npmCommand, ['start'])

/**
let startResult = util.run(npmCommand, ['start'])
// Handle checkout failure
if (startResult === null) {
  Log.error('Could not start bot, maybe you did not fill botconfig.js out?')
} */

prompt.ask()
