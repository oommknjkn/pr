const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}...`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;
        let pro;
        const progress = queue.createProgressBar();
        if (timestamp.progress == 'Infinity') {
            pro = 'Live...'
        } else {
            pro = progress
        };

        embed.setDescription(`Volume **${queue.volume}**%\nLoop mode **${methods[queue.repeatMode]}**\nRequested by ${track.requestedBy}\nDuration:\n${pro}`);

        embed.setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};