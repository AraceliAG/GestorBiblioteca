/*SE AGREGA INFORMACIÓN QUE PUEDE MANIPULAR TODOS LOS DATOS QUE SE ENCUENTRAN EN ROUTES*/
var con = require("../config/conexion");
module.exports ={
    index:function(req, res){    /*SE CREA FUNCION*/
    con.query("SELECT * FROM libros", function(err, datos){
        console.log(datos);
    });
    res.render('libros/index', {title:'Aplication'});  /*SE VA PRIMERO A LA RUTA VISTA/LIBROS/INDEX)*/

    }
    
}