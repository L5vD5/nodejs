//Entry App
//Main App
//Author : L5vD5

const express = require('express');

var app = express();
//jade!!
app.set('view engine', 'jade');
app.set('views', './views');

//static!!
app.use(express.static('public'));

/*********
Template으로 접속
*********/
app.get('/template', function(req,res){
	res.render('temp', {title : 'Wow nodejs',time : Date()});
});
/*********
Home으로 접속
*********/
app.get('/', function(req,res){
	res.send("Hello Home Page");
});

/**
login으로 접속
**/
app.get('/login', function(req,res){
	res.send("<h1>Login Please</h1>");
});



app.listen(2000, function(){
	console.log('3000 포트가 열렸습니다.');
});
