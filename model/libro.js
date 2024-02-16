/*EL MODELO NOS PERMITE ACCEDER A LA INFORMACION DE LA BASE DE DATOS, ES DECIR TRABAJAR CON SENTENCIAS PARA
INTERACTUAR CON LOS REGISTROS*/

module.exports = {
    obtener:function(conexion, funcion){
        conexion.query("SELECT * FROM libros", funcion);
    },

    /*SE CREA NUEVA FUNCION PARA INSERTAR DATOS */

    /*SE AGREGA EL PARAMETRO archivos EL CUAL ES EL ARCHIVO DE IMAGEN */
    insertar:function(conexion, datos, archivos, funcion){ /*SE AGREGA EL PARAMETRO DATOS YA QUE ESTARA ENVIANDO LOS QUE SON LOS DATOS req.body */
        /*AQUI EN LOS CORCHETES SON LOS DATOS QUE ESTEN DENTRO DEL VIEW en el name DE CA ATRIBUTO QUE SE PIDE */
        conexion.query("INSERT INTO libros (nombre, imagen) VALUES (?,?)", [datos.nombre, archivos.filename], funcion); /*SE AGREGA EL filename */
    }
}