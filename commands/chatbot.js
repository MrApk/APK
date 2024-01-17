const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require('axios');




module.exports.execute = execute = async (prodia, interaction) => {
  const message = interaction.options.getString("message")
  let {data} = await axios(`https://api.popcat.xyz/chatbot?msg=${message}&owner=apk000&botname=APK`);
  const exampleEmbed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle(null)
  .setURL(null)
  .setAuthor({ name: null, iconURL: null, url: null })
  .setDescription(`**${data.response}**`)
  .setImage(null)

  await interaction.reply({ embeds: [exampleEmbed] });
};

module.exports.data = new SlashCommandBuilder()
  .setName("chatbot")
  .setDescription("Chat with ai powerd chatbot")
  .setDMPermission(false)
  .addStringOption((option) =>
    option
      .setName("message")
      .setDescription("Message")
      .setRequired(true)
      .setMaxLength(1000)
  );
