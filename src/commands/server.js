const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with server information!'),
    async execute(interaction){
        await interaction.reply(`Server name is ${interaction.guild.name}\nTotal members in the server are ${itneraction.guild.memberCount}`);
    },
};