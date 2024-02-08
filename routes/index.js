var express = require('express');
var router = express.Router();

/*RUTA PRINCIPALL*/
/* GET home page. */
router.get('/', function(req, res, next){
    res.send("BIENVENIDO")
});

module.exports = router;
