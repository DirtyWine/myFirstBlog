var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '主页' });
});
router.get('/reg', function(req,res) {
  res.render('reg',{title: '注册'});
});
router.post('/reg',function(req,res){
});
router.get('/login',function(req,res){
  res.render('login',{title: '登录'});
});
router.post('/login',function(req,res){
});
router.get('/post',function(req,res){
  res.render('post',{title: '发表'});
});
router.post('/post',function(req,res){
});
router.get('/logout',function(rea,res){
  
});
module.exports = router



/*module.express = function(app){
    app.get('/',function (req,res){
      res.render('index',{title:'Express'});
    });
    
};*/