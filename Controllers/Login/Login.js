var express=require('express');
var router=express.Router();


router.get('/',function(req, res){

	res.render('login/login');
})
router.post('/',function(req, res){
	res.redirect('home/home');
})
module.exports=router;