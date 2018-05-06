const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport. initialize());

require('./config/passport.js')(passport);



const coinsController = require('./controllers/coins.js');
app.use('/coins', coinsController);

const usersController = require('./controllers/users.js');
app.use('/user', usersController);

const profileController = require('./controllers/profile.js');
app.use('/profile', profileController);


mongoose.connect('mongodb://localhost:27017/avail');

mongoose.connection.once('open', ()=>{
  console.log('connected to mongoose . . .');
});

app.listen(5000, ()=>{
  console.log('listening on port 3000. . .');
});
