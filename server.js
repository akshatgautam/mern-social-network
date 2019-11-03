const express = require('express');
const config = require('config');
const connectDB = require('./config/db');
const router = require('./router/restRouter');

const app = express();

app.use(express.json({ extended: false }));
app.use(config.get('baseAPIURL'), router);

// Connecting to Mongo
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Welcome to Mern App'));

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
