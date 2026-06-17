const express = require("express");
const path = require("path");
const app = express();
const homeRouter = require('./router/home');

app.use('/home', homeRouter);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    res.send('Holaaaaa')
});

