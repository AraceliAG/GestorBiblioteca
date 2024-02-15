/*SE AGREGA INFORMACIÓN QUE PUEDE MANIPULAR TODOS LOS DATOS QUE SE ENCUENTRAN EN ROUTES*/
const con = require("../config/conexion");
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
    },
    /*SE CREA NUEVA FUNCION PARA GUARDAR LOS DATOS QUE SE ENVIAN DESDE EL FORMULARIO */
    guardar:function(req,res){
        /*SE INSTALA EL PAQUETE body-parse PARA ANALIZAR Y PROCESAR LOS DATOS S}DE SOLICITURDE HTTP COMO JSON O DATOS DEL FORMULARIO */
        /*SE AGREGA EN EL ARCHIVO app.js Y DESPUES SE AGREGA LO SIGUIENTE: */
        console.log(req.body); /*IMPRIME LA INFORMACON QUE SE MANDA AL FORMULARIO EN CONSOLA */
        /*AQUI SE LLAMA A LA FUNCION INSERTAR EL CUAL LE PASARA UNA CONEXION Y DESPUES LOS DATOS CON EL req.body */
        /*EL CUAL ERAN LOS DATOS QUE SE MANDABAN DESDE EL FORMULARIO, LA FUNCION REDICCIONARA DIRECTAMENTE A LA VISTA libro */
        libro.insertar(conexion, req.body, function(err){
                res.redirect('/libros');
        });
    }
    
}