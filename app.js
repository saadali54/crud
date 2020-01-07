const express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser),
methodOverride = require('method-override')
route = require('

mongoose.connect(process.env.DATABASEURL,{useNewUrlParser:true, useUnifiedTopology:true});
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.listen(process.env.PORT, process.env.IP);
