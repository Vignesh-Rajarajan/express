var express= require('express');
var app=express();

var middleWare={
	requireAuth:function(req,res,next){
          console.log('message');
          next();
	},
	logger:function(req,res,next){
		console.log(req.method);
		next();
	}
}

app.use(middleWare.logger);
app.get('/',middleWare.requireAuth,function(req,res){
	res.send('Hello Express');
});

app.get('/about',middleWare.requireAuth,function(req,res){
	res.send('About Us');
});

app.use(express.static(__dirname+'/public'));



app.listen(3000);
