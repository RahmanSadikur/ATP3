var express=require('express');
var login=require('./Controllers/Login/Login');
var Home=require('./Controllers/Home/Home');
var BodyParser=require('body-parser');
var session=require('express-session');
var ejs = require('ejs');
var app=express();




//middleware

app.set('view engine','ejs');


app.use(BodyParser.urlencoded({extended:true}));

app.use(express.static('prectice'));
app.use('/login',login);
app.use('/Home',Home);





app.listen(69,function(){
	console.log('Done Bro');
})