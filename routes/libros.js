var express = require('express');
var router = express.Router();
const librosController = require("../controller/librosController")

/* GET home page. */
router.get('/', librosController.index);

module.exports = router;
