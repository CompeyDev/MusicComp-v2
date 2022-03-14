const { ShardingManager } = require('discord.js');
const botconfig = require('./botconfig')
const logger = require('./structures/logger')

const manager = new ShardingManager('./index.js', { token: botconfig.Token });

manager.on('shardCreate', shard => logger.log(`Launched shard ${shard.id}`));

manager.spawn();

// this file will not be used, instead a class extend function in the core bot script will be.
