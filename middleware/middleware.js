
	var middleware={
	requireAuth:function(req,res,next){
          console.log('message');
          next();
	},
	logger:function(req,res,next){
		console.log(req.method);
		next();
	}
};

module.exports=middleware