const express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
journalRoute = require('./controllers/journal')

mongoose.connect(process.env.DATABASEURL,{useNewUrlParser:true, useUnifiedTopology:true});
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/',journalRoute)

app.listen(process.env.PORT, process.env.IP);
