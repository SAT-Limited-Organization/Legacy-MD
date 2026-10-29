/**
 * Antibot Command — detect other Baileys bots via message-ID heuristics
 */

const database = require('../../database');
const config = require('../../config');

module.exports = {
  name: 'antibot',
  aliases: ['nobot'],
  category: 'admin',
  description: 'Kick/warn other bots that post in the group (Baileys ID heuristic)',
  usage: '.antibot <on/off/set/get>',
  groupOnly: true,
  adminOnly: true,
  botAdminNeeded: true,

  async execute(sock, msg, args, extra) {
    try {
      const p = config.prefix;
      const settings = database.getGroupSettings(extra.from);

      if (!args[0]) {
        const status = settings.antibot ? 'ON' : 'OFF';
        const action = settings.antibotAction || 'warn';
        return extra.reply(
          `🤖 *Antibot Status*\n\n` +
            `Status: *${status}*\n` +
            `Action: *${action}*\n\n` +
            `Admins, owner, and this bot are exempt.\n\n` +
            `Usage:\n` +
            `  \`${p}antibot on\`\n` +
            `  \`${p}antibot off\`\n` +
            `  \`${p}antibot set warn | kick\`\n` +
            `  \`${p}antibot get\``
        );
      }

      const opt = args[0].toLowerCase();

      if (opt === 'on') {
        if (settings.antibot) return extra.reply('*Antibot is already on*');
        database.updateGroupSettings(extra.from, { antibot: true });
        return extra.reply('*Antibot has been turned ON*');
      }

      if (opt === 'off') {
        database.updateGroupSettings(extra.from, { antibot: false });
        return extra.reply('*Antibot has been turned OFF*');
      }

      if (opt === 'set') {
        if (args.length < 2) {
          return extra.reply(`*Please specify an action: \`${p}antibot set warn | kick\`*`);
        }
        const setAction = args[1].toLowerCase();
        if (!['warn', 'kick'].includes(setAction)) {
          return extra.reply('*Invalid action. Choose warn or kick.*');
        }
        database.updateGroupSettings(extra.from, {
          antibotAction: setAction,
          antibot: true,
        });
        return extra.reply(`*Antibot action set to ${setAction}*`);
      }

      if (opt === 'get') {
        const status = settings.antibot ? 'ON' : 'OFF';
        const action = settings.antibotAction || 'warn';
        return extra.reply(`*Antibot Configuration:*\nStatus: ${status}\nAction: ${action}`);
      }

      return extra.reply(`*Use \`${p}antibot\` for usage.*`);
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  },
};