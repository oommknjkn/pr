module.exports = {
    name: 'resume',
    aliases: ['rs', 'اكمال', 'كمل', 'دوس'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No music currently playing ${message.author}...`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Current music ${queue.current.title} resumed` : `Something went wrong ${message.author}... try again ? ❌`);
    },
};