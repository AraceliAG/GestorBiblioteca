/*SE AGREGA INFORMACIÓN QUE PUEDE MANIPULAR TODOS LOS DATOS QUE SE ENCUENTRAN EN ROUTES*/

module.exports ={
    index:function(req, res){    /*SE CREA FUNCION*/
    res.render('libros/index', {title:'Aplication'});  /*SE VA PRIMERO A LA RUTA VISTA/LIBROS/INDEX)*/

    }
    
}