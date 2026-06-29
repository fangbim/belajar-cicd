const express = require('express');
const app = express();
const PORT = 3023;

app.get('/', (req, res) => {
    res.send('Deploy otomatis berhasil! Ini versi 2.0 tanpa sentuh VPS');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
