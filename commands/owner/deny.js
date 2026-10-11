const fs = require('fs');
const path = require('path');

const disallowGroupCommand = {
  name: 'disallow',
  aliases: ['deny'],
  category: 'owner',
  permission: 'sudo',

  async execute(sock, msg) {
    const jid = msg?.key?.remoteJid;

    if (!jid || !jid.endsWith('@g.us')) {
      if (jid) {
        await sock.sendMessage(jid, {
          text: '❌ This command can only be used inside a group chat.'
        });
      }
      return;
    }

    const filePath = path.resolve(
      __dirname,
      '../../data/allowedGroups.json'
    );

    let allowedGroups = [];

    try {
      if (fs.existsSync(filePath)) {
        const parsed = JSON.parse(
          fs.readFileSync(filePath, 'utf8')
        );

        if (!Array.isArray(parsed)) {
          throw new Error('Allowlist must be a JSON array.');
        }

        allowedGroups = parsed;
      }

      if (!allowedGroups.includes(jid)) {
        await sock.sendMessage(jid, {
          text: 'ℹ️ This group is not on the allowlist.'
        });
        return;
      }

      allowedGroups = allowedGroups.filter(
        id => id !== jid
      );

      fs.writeFileSync(
        filePath,
        JSON.stringify(allowedGroups, null, 2) + '\n'
      );

      await sock.sendMessage(jid, {
        text: '🚫 Access revoked. This group is now disallowed.'
      });

    } catch (error) {
      console.error('[deny command]', error);

      await sock.sendMessage(jid, {
        text: '❌ Could not update the group allowlist. Check the bot logs.'
      });
    }
  }
};

module.exports = disallowGroupCommand;