var express = require('express');
var router = express.Router();
var multer = require('multer'); /*AQUI AGREGAMOS NUESTRO PAQUETE multer, SE AGREGA COMO EL express */
var fecha = Date.now(); /*AQUI SE AGREGA UNA FECHA ´PARA EVITAR SOBREESCRIBIR ARCHIVOS QUE SE SUBEN AL MISMO TIEMPO */
const librosController = require("../controller/librosController")

var rutaAlmacen = multer.diskStorage(
    { 
    destination:function(request, file, callback){ /*SE CREA FUNCION PARA COLOCAR LA IMAGEN QUE LE PROPORCIONES (callback)*/
        callback(null, './public/images/'); /*DIRECTORIO DONDE SE GUARDARAN LOS ARCHIVOS */
    },
    filename:function(request, file, callback){ /*REENOMBRACION DE ARCHIVO PARA EVITAR SOBRE ESCRITURA */
        console.log(file); 
        callback(null, fecha + "_" + file.originalname); /*AQUI SE ASIGA NUEVO NOMBRE AGREGANDO LA FECHA */
    }
});

var cargar = multer({storage:rutaAlmacen});/*ELEMENTO PARA CARGAR NUESTRA IMAGEN */
/* GET home page. */
router.get('/', librosController.index);
router.get('/crear', librosController.crear); /*AQUI AGREGAMOS EL CONTROLADOR EL CUAL NOS DARA ACCESO AL ARCHIVO */
/*SE MODIFICA EL POST  AGREGANDO EL cargar.single ES DECIR UN ARCHIVO */
router.post("/",cargar.single("archivo"), librosController.guardar) /*AQUI SE RECEPCIONARA LOS DATOS QUE SE MANDEN DESDE EL ARCHIVO EJS*/
/*EL "/" ES DIRECTAMENTE DE LIBROS, IMPORTANTE */


module.exports = router;
