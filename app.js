// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('Estoy respondiendo tus solicitudes v3')
// })

// const puerto = 3000;
// server.listen(puerto, () => {
//     console.log('Recibiendo solicitudes.')
// })

//1 - Invocamos a Express

const express = require('express')
const app = express();
//2 - Invocamos a Nodemailer
const nodemailer = require('nodemailer')
//2 - seteamos urlencoded para capturar los datos del formulario

app.use(express.urlencoded({extended:false}));
app.use(express.json());
//3- Invocamos a dotenv
const dotenv = require('dotenv')
dotenv.config({path:'./env/.env'})


const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"))

//6 - Invocamos a bcryptjs

const bcryptjs = require('bcryptjs');

//7 - Var de session
const session = require('express-session')
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized:true
}))

//8 - Establecemos las rutas
app.get('/login' , (req,res) => {
    res.render("login")
})
app.get('/', (req, res) =>{
    res.render('main')
})
//9 - Invocamos al modulo de conexion a la BD
const connection = require('./database/db');

//10- Autenticacion
app.post('/auth', async (req, res)=>{
    const user = req.body.user;
    const pass = req.body.pass;
    let passwordHaash = await bcryptjs.hash(pass, 8)
  if(user && pass){
      connection.query('SELECT * FROM users WHERE user = ?',[user], async (error, results)=>{
          if(results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))){
              res.render('login',{
                  alert:true,
                  alertTittle: "Error",
                  alertMessage: "Usuario y/o password incorrectas",
                  alertIcon: "error",
                  showConfirmButton:true,
                  timer:1500,
                  ruta:'login'
              })
          }else{
              req.session.loggedin = true;
              req.session.name= results[0].name
              res.render('login',{
                  alert:true,
                  alertTittle: "Conexion exitosa",
                  alertMessage: "!Inicio de sesion correcto!",
                  alertIcon: "success",
                  showConfirmButton:false,
                  timer:1500,
                  ruta:''
              })
          }
      })
  }else{
      res.render('login',{
          alert:true,
          alertTittle: "Advertencia",
          alertMessage: "!Ingresa un usuario y/o password!",
          alertIcon: "warning",
          showConfirmButton:false,
          timer:1500,
          ruta:'login'
      })
  }
  })
// Auth pages

app.get('/admin', (req, res)=>{
    if(req.session.loggedin){
        res.render('admin',{
            login: true,
            name: req.session.name
        });
    }else{
        res.render('index', {
            login:false,
            name:'Debe iniciar sesion'
            })
        }
    
})


app.get('index', (req,res) => {
    res.render('form');
    res.sendFile(__dirname + '/public/index.hmtl')
})

app.post('index', (req,res) =>{
    const {name,email,message} = req.body;
    const contentHmtl = `
    <h1>Formulario de nodemailer</h1>
    <ul>
        <li>name: ${name}</li>
        <li>email: ${email}</li>
    </ul>
    <p>${message}</p>
    `;
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lauriane14@ethereal.email',
            pass: 'nNKP7DNb8pBAAh2KnV'
        }
    });
    const mailOptions={
        from:"Remitente",
        to:"juancristobaldev@gmail.com",
        subject:"Nodemailer prueba",
        html: contentHmtl,
        
    };
    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            res.status(500).send(error.message)
        } else {
            console.log('Enviado correctamento')
            res.sendFile(__dirname + '/public/index.html')
        }
    });
});




app.listen(port, () =>{
    console.log('Servidor a tu servicio en puerto ', port)
})
