const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { prompt } = "pretty flowers";

    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer open-key`,
            },
            body: JSON.stringify({
                prompt: prompt,
                n: 1,
                size: "512x512",
            }),
        });

        const data = await response.json();
        const imageUrl = data.data[0].url;
        res.status(200).json({ image_url: imageUrl });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
