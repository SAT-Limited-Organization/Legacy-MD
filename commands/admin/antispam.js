/**
 * Antispam Command — delete message bursts, then warn or kick
 */

const database = require('../../database');
const config = require('../../config');

module.exports = {
  name: 'antispam',
  aliases: ['nospam'],
  category: 'admin',
  description: 'Delete fast message bursts and warn or kick the sender',
  usage: '.antispam <on/off/set/get>',
  groupOnly: true,
  adminOnly: true,
  botAdminNeeded: true,

  async execute(sock, msg, args, extra) {
    try {
      const p = config.prefix;
      const settings = database.getGroupSettings(extra.from);

      if (!args[0]) {
        const status = settings.antiSpam ? 'ON' : 'OFF';
        const action = settings.antiSpamAction || 'warn';
        return extra.reply(
          `🚫 *Antispam Status*\n\n` +
            `Status: *${status}*\n` +
            `Action: *${action}*\n` +
            `Limit: *5 messages in 8 seconds*, or the same text *3 times*\n\n` +
            `Admins, owner, and this bot are exempt.\n\n` +
            `Usage:\n` +
            `  \`${p}antispam on\`\n` +
            `  \`${p}antispam off\`\n` +
            `  \`${p}antispam set warn | kick\`\n` +
            `  \`${p}antispam get\``
        );
      }

      const opt = args[0].toLowerCase();

      if (opt === 'on') {
        if (settings.antiSpam) return extra.reply('*Antispam is already on*');
        database.updateGroupSettings(extra.from, { antiSpam: true });
        return extra.reply('*Antispam has been turned ON*');
      }

      if (opt === 'off') {
        database.updateGroupSettings(extra.from, { antiSpam: false });
        return extra.reply('*Antispam has been turned OFF*');
      }

      if (opt === 'set') {
        if (args.length < 2) {
          return extra.reply(`*Please specify an action: \`${p}antispam set warn | kick\`*`);
        }
        const setAction = args[1].toLowerCase();
        if (!['warn', 'kick'].includes(setAction)) {
          return extra.reply('*Invalid action. Choose warn or kick.*');
        }
        database.updateGroupSettings(extra.from, {
          antiSpamAction: setAction,
          antiSpam: true,
        });
        return extra.reply(`*Antispam action set to ${setAction}*`);
      }

      if (opt === 'get') {
        const status = settings.antiSpam ? 'ON' : 'OFF';
        const action = settings.antiSpamAction || 'warn';
        return extra.reply(`*Antispam Configuration:*\nStatus: ${status}\nAction: ${action}`);
      }

      return extra.reply(`*Use \`${p}antispam\` for usage.*`);
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  },
};