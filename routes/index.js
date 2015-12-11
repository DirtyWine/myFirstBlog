var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/my', function(req,res, next) {
  res.send('Hello world!');
});
module.exports = router



/*module.express = function(app){
    app.get('/',function (req,res){
      res.render('index',{title:'Express'});
    });
    
};*/