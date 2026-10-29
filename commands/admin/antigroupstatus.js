/**
 * Antigroupstatus - Block group status posts in the group
 */

const database = require('../../database');
const groupStatusTracker = require('../../utils/groupStatusTracker');

module.exports = {
  name: 'antigroupstatus',
  aliases: ['antigstatus', 'ags'],
  category: 'admin',
  description: 'Block group status posts (delete/kick)',
  usage: '.antigroupstatus <on/off/set/get>',
  groupOnly: true,
  adminOnly: true,
  botAdminNeeded: true,

  async execute(sock, msg, args, extra) {
    try {
      const ctx = msg.message?.extendedTextMessage?.contextInfo;
      if (!args[0] && ctx?.stanzaId && ctx?.participant) {
        const known = groupStatusTracker.list(extra.from).find((e) => e.key.id === ctx.stanzaId);
        const target = known || {
          key: {
            remoteJid: extra.from,
            fromMe: false,
            id: ctx.stanzaId,
            participant: ctx.participant,
          },
        };
        const deleted = sock.revokeGroupStatus
          ? await sock.revokeGroupStatus(extra.from, target)
          : false;
        if (deleted) groupStatusTracker.remove(extra.from, [ctx.stanzaId]);
        return extra.reply(deleted ? '✅ Status has been deleted.' : '❌ Couldn\'t delete the status.');
      }

      if (!args[0]) {
        const settings = database.getGroupSettings(extra.from);
        const status = settings.antigroupstatus ? 'ON' : 'OFF';
        const action = settings.antigroupstatusAction || 'delete';
        return extra.reply(
          `📵 *Anti Group Status*\n\n` +
          `Status: *${status}*\n` +
          `Action: *${action}*\n\n` +
          `Blocks members from posting WhatsApp group statuses.\n` +
          `Reply to a group status to delete it.\n\n` +
          `Usage:\n` +
          `  .antigroupstatus on\n` +
          `  .antigroupstatus off\n` +
          `  .antigroupstatus set delete | kick\n` +
          `  .antigroupstatus get`
        );
      }

      const opt = args[0].toLowerCase();

      if (opt === 'on') {
        if (database.getGroupSettings(extra.from).antigroupstatus) {
          return extra.reply('*Anti group status is already on*');
        }
        database.updateGroupSettings(extra.from, { antigroupstatus: true });
        return extra.reply('*Anti group status has been turned ON*');
      }

      if (opt === 'off') {
        database.updateGroupSettings(extra.from, { antigroupstatus: false });
        return extra.reply('*Anti group status has been turned OFF*');
      }

      if (opt === 'set') {
        if (args.length < 2) {
          return extra.reply('*Usage: .antigroupstatus set delete | kick*');
        }
        const setAction = args[1].toLowerCase();
        if (!['delete', 'kick'].includes(setAction)) {
          return extra.reply('*Invalid action. Choose delete or kick.*');
        }
        database.updateGroupSettings(extra.from, {
          antigroupstatusAction: setAction,
          antigroupstatus: true
        });
        return extra.reply(`*Anti group status action set to ${setAction}*`);
      }

      if (opt === 'get') {
        const settings = database.getGroupSettings(extra.from);
        const status = settings.antigroupstatus ? 'ON' : 'OFF';
        const action = settings.antigroupstatusAction || 'delete';
        return extra.reply(`*Anti Group Status Config:*\nStatus: ${status}\nAction: ${action}`);
      }

      return extra.reply('*Use .antigroupstatus for usage.*');
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};