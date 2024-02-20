/*SE AGREGA INFORMACIÓN QUE PUEDE MANIPULAR TODOS LOS DATOS QUE SE ENCUENTRAN EN ROUTES*/
const con = require("../config/conexion");
var conexion = require("../config/conexion");
var libro = require("../model/libro");
var borrar = require("fs"); /*USO DEL PAQUETE fs EL CUAL NOS AYUDARA AL BORRADO DEL ARCHIVO */

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
        console.log(req.file.filename); /*AQUI SE ADUNTA A LA CARPETA DE IMAGEN, SE GUARDA AL MOMENTO QUE LA FUNCION GUARDAR SE EJECUTE */
        /*AQUI SE LLAMA A LA FUNCION INSERTAR EL CUAL LE PASARA UNA CONEXION Y DESPUES LOS DATOS CON EL req.body */
        /*EL CUAL ERAN LOS DATOS QUE SE MANDABAN DESDE EL FORMULARIO, LA FUNCION REDICCIONARA DIRECTAMENTE A LA VISTA libro */
        libro.insertar(conexion, req.body, req.file, function(err){ /*SE AGREGA EL PARAMETRO filename EL CUAL ERA LA ASIGNACION NUEVA DE NUESTRO ARCHIVO QUE SUBIMOS */
                res.redirect('/libros');
        });
    },
    eliminar:function(req, res){ /*SE CREA FUNCION BORRAR */
        console.log("Recepcion de datos");
        console.log(req.params.id);
        libro.retornarDatosID(conexion, req.params.id, function(err, registros){ /*SE LLAMA LA FUNCION CREADA EN EL MODELO */
            var nombreImagen = "public/images/" + (registros[0].imagen); /*AQUI SE CREA VARIABLE DONDE OBTENDREMOS EL NNOMBRE DEL ARCHIVO */
            
            /*VERIFICAMOS SI EL ARCHIVO EXISTE CON LA SIGUIENTE CONDICION */

            if(borrar.existsSync(nombreImagen)){ /*SI EL NOMBRE DEL ARCHIVO EXISTE ENTONCES... */
               borrar.unlinkSync(nombreImagen); /*BORRA EL ARCHIVO */                     

            }
            
            res.send(nombreImagen); /*AQUI MUESTRA EL NOMBRE DEL ARCHIVO*/

        });
    }
    
}