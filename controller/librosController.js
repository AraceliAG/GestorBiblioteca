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
    
    },
    /*RECUERDA AGREGAR LA COMA PARA AGREGAR OTRA FUNCION */
    /*AQUI SOLAMENTE QUEREMOS TENER ACCESO A LA VISTA DE crear.ejs*/
    /*COMO TAL ES UNA INSTRUCCION O LO QUE SE EJECUTARA */
    crear:function(req, res){
        res.render('libros/crear');
    }
    
}