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



//8 - Establecemos las rutas
app.get('/', (req, res) =>{
    res.render('main')
})

app.get('main', (req,res) => {
    res.render('form');
    res.sendFile(__dirname + '/public/main.ejs')
})

app.post('main', (req,res) =>{
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
            res.sendFile(__dirname + '/public/main.ejs')
        } else {
            console.log('Enviado correctamento')
            res.sendFile(__dirname + '/public/main.ejs')
        }
    });
});




app.listen(port, () =>{
    console.log('Servidor a tu servicio en puerto ', port)
})
