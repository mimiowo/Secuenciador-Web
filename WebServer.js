const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('Client connected: ' + req.hostname);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
