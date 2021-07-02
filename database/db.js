const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'be4c1dddfb8b22',
    password: '55b553e5',
    database: 'heroku_5aba52e1f3c18b3'
});
connection.connect((error)=>{
    if(error){
        console.log('El error de conexion es:'+error);
        return;
    }
    console.log('¡Conectado a la BD')
});
module.exports = connection;
