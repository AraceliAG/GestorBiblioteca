var mysql = require("mysql");

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca'
});

con.connect (
    (err) => {
        if (!err){
            console.log("CONEXION EXITOSA :D ")

        } else{
            console.log("NO SE LOGRÓ ESTABLECER CONEXION :C")
        }
    }
);

module.exports = con;