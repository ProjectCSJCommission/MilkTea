module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message) {
		if (message.author.bot) return;
		const messageMember = message.guild.members.cache.find((user) => user.id === message.author.id);
		let messageMemberNick = messageMember.nickname;
		if (messageMemberNick === null) {
			messageMemberNick = message.author.username;
		}
		if (
			//  日文觸發詞
			message.content === 'おはよう' ||
			// 中文觸發詞
			message.content === '奶茶喵早安' ||
			message.content === '早安' ||
			// 中日混和觸發詞
			message.content === '奶茶喵おはよう'
		) {
			const RandomMessage =
			[
				'おはよう～♪',
				'早安呀～♪',
			];
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: /* messageMemberNick + */RandomMessage[Math.floor(Math.random() * RandomMessage.length)],
					ephemeral: false,
				},
			);
		}
		if (
			//  日文觸發詞
			message.content === 'こんにちは' ||
			// 中文觸發詞
			message.content === '奶茶喵午安' ||
			message.content === '午安' ||
			// 中日混和觸發詞
			message.content === '奶茶喵こんにちは'
		) {
			const RandomMessage =
			[
				'こんにちは～♪',
				'午安呀～♪',
			];
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: /* messageMemberNick + */ RandomMessage[Math.floor(Math.random() * RandomMessage.length)],
					ephemeral: false,
				},
			);
		}
		if (
			//  日文觸發詞
			message.content === 'おやすみ' ||
			// 中文觸發詞
			message.content === '奶茶喵晚安' ||
			message.content === '晚安' ||
			// 中日混和觸發詞
			message.content === '奶茶喵おやすみ'
		) {
			const RandomMessage =
			[
				'おやすみ～♪',
				'晚安呀～♪',
			];
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: /* messageMemberNick + */ RandomMessage[Math.floor(Math.random() * RandomMessage.length)],
					ephemeral: false,
				},
			);
		}
		if (
			message.content.match('起') != null &&
			message.content.match('來') != null &&
			message.content.match('嗨') != null
		) {
			const RandomMessage =
			[
				'去睡覺',
				'不要',
				'再說',
			];
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: RandomMessage[Math.floor(Math.random() * RandomMessage.length)],
					ephemeral: false,
				},
			);
		}
		if (
			// message.content.match('<@475504086243082261>') != null ||
			// message.content.match('<@687833636325949496>') != null
			message.content === '<@475504086243082261>' ||
			message.content === '<@687833636325949496>'
		) {
			return message.reply(
				{
					allowedMentions: { repliedUser: false },
					content: 'https://i.imgur.com/XKu5Dlk.png',
					ephemeral: false,
				},
			);
		};
	},
};
