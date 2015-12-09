var express= require('express');
var app=express();
var port=process.env.PORT||3000;
var middleWare=require('./middleware/middleware.js');
app.use(middleWare.logger);
app.get('/',middleWare.requireAuth,function(req,res){
	res.send('Hello Express,,,');
});

app.get('/about',middleWare.requireAuth,function(req,res){
	res.send('About Us');
});

app.use(express.static(__dirname+'/public'));



app.listen(port);
