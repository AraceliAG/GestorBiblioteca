var express = require('express');
var router = express.Router();
const librosController = require("../controller/librosController")

/* GET home page. */
router.get('/', librosController.index);
router.get('/crear', librosController.crear); /*AQUI AGREGAMOS EL CONTROLADOR EL CUAL NOS DARA ACCESO AL ARCHIVO */
router.post("/", librosController.guardar) /*AQUI SE RECEPCIONARA LOS DATOS QUE SE MANDEN DESDE EL ARCHIVO EJS*/
/*EL "/" ES DIRECTAMENTE DE LIBROS, IMPORTANTE */

module.exports = router;
