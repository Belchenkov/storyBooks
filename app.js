const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Load User Model
require('./models/User');

// Passport Config
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');

// Load Keys
const keys = require('./config/keys');

// Map global promises
mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose.connect(keys.mongoURI, {
    useMongoClient: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('It Works');
});

// Use Routes
app.use('/auth', auth);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});