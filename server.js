const express = require('express');
const app = express();
const PORT = 3000;

// Static files serve
app.use(express.static('.'));

app.get('/status', (req, res) => {
    res.json({ status: '🎮 Server එක ක්‍රියාත්මක වේ!' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server එක http://localhost:${PORT} හි ක්‍රියාත්මක වේ`);
});
