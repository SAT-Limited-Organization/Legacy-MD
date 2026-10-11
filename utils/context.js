function newsletterCtx() {
    return {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363410818567479@newsletter', // replace with your channel ID
            newsletterName: 'SAT Limited',
            serverMessageId: 1
        }
    };
}

module.exports = { newsletterCtx };