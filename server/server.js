const express = require('express');
const mongoose = require('mongoose');
var mongo = require('mongodb');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const path = require('path');

const app = express(); // initialize express into app
app.use(cors()); // enabling all cors
// body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
// DB config
// connect to MongoDB
mongoose.connect("mongodb://localhost:27017/boxingData");
const db = mongoose.connection;

app.use(passport.initialize());

require('./config/passport')(passport);

const staticFiles = express.static(path.join(__dirname, '../../client/build'));
app.use(staticFiles);

var boxers = require('./routes/boxers');
var users = require('./routes/users');
var myboxers = require('./routes/myboxers');



app.use('/api/boxers', boxers);
app.use('/api/users', users);
app.use('/api/myboxers', myboxers);

app.use('/*', staticFiles)
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World connected mother pearl'));

app.listen(port, () => {
    console.log(`Server running on ${port}`)
});