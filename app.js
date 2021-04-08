// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('Estoy respondiendo tus solicitudes v3')
// })

// const puerto = 3000;
// server.listen(puerto, () => {
//     console.log('Recibiendo solicitudes.')
// })
 
const express = require('express');
const app = express();
var path = require('path');
var publicPath = path.resolve(__dirname, 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/js/js.js');
    });

app.use((req, res, next) =>{
    res.status(404).sendFile(__dirname + "/public/404.html")
})


app.listen(port, () =>{
    console.log('Servidor a tu servicio en puerto ', port)
})
