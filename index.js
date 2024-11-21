const express = require("express");
const path = require("path");

var app = express();

// Middleware
app.use(express.static(path.join(__dirname,'public')));

// Middleware para el parseo de req.body
app.use(express.urlencoded());
app.use(express.json());

// use templates
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Simulando base de datos
let clientesApp = [
    {
        id:1,
        nombre:'Ane',
        apellido: 'Uriarte',
        email: 'ane@ni.eus'
    },
    {
        id:2,
        nombre:'Jon',
        apellido: 'Gorrotxategi',
        email: 'jon@ni.eus'
    },
    {
        id:3,
        nombre:'Oihane',
        apellido: 'Lete',
        email: 'oihane@ni.eus'
    }

];


// enrutamiento
app.get("/",function (req,res){
    //res.send("Hello world");
    res.render('index',{'titulo':'Usuarios de mi App','clientes':clientesApp});
}
);

app.listen(3000,function (){
   console.log("Servidor en puerto 3000")
});
