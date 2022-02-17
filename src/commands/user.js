const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Get user details!'),
    async execute(interaction){
        await interaction.reply(`Your username is ${interaction.user.username}\nYour Id is ${interaction.user.id}`);
    },
};