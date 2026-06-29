const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Halo World, Deploy otomatis berhasil v1.0');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
