const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();
        const support = new MessageButton().setLabel("Support").setStyle("LINK").setURL("https://discordapp.com/users/528889529294127104");
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel("Support")
            .setStyle("LINK")
            .setURL("https://discordapp.com/users/528889529294127104"),
        );

        embed.setColor('BLUE');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);
        embed.setDescription(`Prefix: ${client.config.app.px}`)
        embed.addField(`Commands`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' , '), true)

        embed.setTimestamp();
        embed.setFooter(`Made with ❤️ By ${client.users.cache.find(user => user.id === '528889529294127104').tag}`)
        message.channel.send({ embeds: [embed], components: [row] });
    },
};