const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");



module.exports.execute = execute = async (prodia, interaction) => {
  const exampleEmbed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Ping...')
  .setURL(null)
  .setAuthor({ name: null, iconURL: null, url: null })
  .setDescription(`Ping is **${Date.now() - interaction.createdTimestamp}ms**`)
  .setImage(`https://falsiskremlin.sirv.com/resim_2020-11-28_113400.png?text.0.text=${Date.now() - interaction.createdTimestamp}ms&text.0.position.x=-10%25&text.0.position.y=-25%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Play&watermark.0.image=%2FImages%2F784413323910709288.png&watermark.0.position.x=-35%25&watermark.0.scale.width=200&watermark.0.scale.height=200`)

  await interaction.reply({ embeds: [exampleEmbed] });
};

module.exports.data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("it show Bot ping")
  .setDMPermission(false);

module.exports.testGuildOnly = true;
