/*SE AGREGA INFORMACIÓN QUE PUEDE MANIPULAR TODOS LOS DATOS QUE SE ENCUENTRAN EN ROUTES*/
var conexion = require("../config/conexion");
var libro = require("../model/libro");

module.exports={

    index:function(req, res){    /*SE CREA FUNCION*/
    
        libro.obtener(conexion, function(err, datos){
            console.log(datos);
            /*SE CREA VARIABLE LIBROS QUE SON LOS DATOS*/
            res.render('libros/index', {title:'Aplication', libros:datos});  /*SE VA PRIMERO A LA RUTA VISTA/LIBROS/INDEX)*/
    });
    
    }
}