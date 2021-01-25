//importamos la libreria de express
const express = require('express');

//ejecutamos la funcion parta obtener el objeto app por el cual definimos rutas
const app = express();

app.set('view engine','ejs')

app.use('/static',express.static('static',{
    
    etag: false,                             //Desactivamos la copia que genera la cache
    maxAge: '5h'
})); //middleware


//Ruta inicial que responde a un docuemnto HTML
app.get('/',function(req,res){
    res.render('index');
});

//ponemos a escuchar a nuestro servidor
app.listen(3000);