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

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))

app.get('/login' , (req,res) => {
    res.render("apploginfb", {
        tituloServicios : "Hola puto de nuevo",
        descripcion     : "Chupala puto"
    })
    
})
FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // The user is logged in and has authenticated your
      // app, and response.authResponse supplies
      // the user's ID, a valid access token, a signed
      // request, and the time the access token 
      // and signed request each expire.
      var uid = response.authResponse.userID;
      var accessToken = response.authResponse.accessToken;
    } else if (response.status === 'not_authorized') {
      // The user hasn't authorized your application.  They
      // must click the Login button, or you must call FB.login
      // in response to a user gesture, to launch a login dialog.
    } else {
      // The user isn't logged in to Facebook. You can launch a
      // login dialog with a user gesture, but the user may have
      // to log in to Facebook before authorizing your application.
    }
   });

app.use((req, res, next) =>{
    res.status(404).sendFile(__dirname + "/public/404.html")
})


app.listen(port, () =>{
    console.log('Servidor a tu servicio en puerto ', port)
})
