const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	defaultPermission: true,
	data: new SlashCommandBuilder()
		.setName('divinate')
		.setDescription('Check your luck!'),
	async execute(interaction) {
		const RandomMessage = [
			'大吉',
			'吉',
			'中',
			'兇',
			'大凶',
		];
		const ping = new MessageEmbed()
			.setColor('RANDOM')
			.setAuthor({
				name: interaction.guild.me.displayName,
				iconURL: interaction.client.user.avatarURL({ dynamic: true }),
				url: process.env.SiteURL,
			})
			.setTitle('今日運勢')
			.setDescription(RandomMessage)
			.setFooter({
				text: process.env.COPYRIGHT,
				iconURL: interaction.client.user.avatarURL({ dynamic: true }),
			});
		await interaction.reply({
			embeds: [ping],
			ephemeral: false,
		});
	},
};
