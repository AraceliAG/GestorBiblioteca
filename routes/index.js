var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aplicacion con Node JS y Express XD ' }); //SE PUEDE CAMBIAR EL NOMBRE
});

module.exports = router;
