//importamos la libreria de express
const express = require('express');

//ejecutamos la funcion parta obtener el objeto app por el cual definimos rutas
const app = express();

app.use('view engine','ejs')

app.use('/static',express.static('static')); //middleware


//Ruta inicial que responde a un docuemnto HTML
app.get('/',function(req,res){
    res.sendFile('index.html',{
        root: __dirname
    });
    //res.send(__dirname); //------>  Nos da el PAHT absoluto sin nesecidad de escribirlo, se actualiza solo con el ___dirname
});

//ponemos a escuchar a nuestro servidor
app.listen(3000);