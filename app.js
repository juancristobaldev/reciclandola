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
const nodemailer = require('nodemailer')

app.use(express.urlencoded({extended: false}))

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
app.get('/', (req, res) =>{
    res.render('index')
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
