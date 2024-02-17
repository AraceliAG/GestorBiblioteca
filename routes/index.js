var express = require('express');
var router = express.Router();

/*RUTA PRINCIPALL*/
/* GET home page. */
router.get('/', function(req, res, next){
    res.send("xd")
});

module.exports = router;
