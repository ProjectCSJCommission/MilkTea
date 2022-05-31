const logger = require('node-color-log');
const date = new Date().toLocaleString(undefined, {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
	hour: '2-digit',
	hour12: false,
	minute: '2-digit',
	timeZoneName: 'short',
}).replace(/\:|\//g, '-');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		logger.debug(date);
		client.user.setPresence({
			activities: [{
				name: 'まつりとサラ',
				type: 'PLAYING',
			}],
			status: 'online',
		});
		logger.debug(`⏳Trying to login system with ${client.user.tag}...`);
		logger.debug('✔️Logged in success!');
		logger.info(`Logged in user:${client.user.tag}!`);
	},
};
