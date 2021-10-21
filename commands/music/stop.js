module.exports = {
    name: 'stop',
    aliases: ['dc', 'وقف', 'انقلع'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}...`);

        queue.destroy();

        message.channel.send(`Music stopped.`);
    },
};