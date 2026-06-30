const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Servir archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, '..')));

// 2. Definir rutas limpias para servir los archivos HTML correctos
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/offers', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/offers/offers.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/gallery/gallery.html'));
});

// 3. Manejo de error 404 para cualquier otra ruta no definida
app.use((req, res) => {
    res.status(404).send('Página no encontrada (Cannot GET)');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



