exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
❉──────────❉
 *FROM; ${BotName}*
 *To; ${id.split("@s.whatsapp.net")[0]}* 👋
❉──────────❉
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
╔════════════════════
║ *Donasi Ke ${BotName}*
╠════════════════════
║️✓ *pulsa Telkom*: 082143398967
║️ ✓ * PULSA Xl *: 087877173957
║️ ✓ * Dana *: 082334601906
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY IQBAL-GANS*
╚════════════════════`
}

