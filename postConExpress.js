const express = require('express')
const bodyParse = require('body-parser')

const app = express();

app.use( bodyParse.urlencoded({extended:true}));

app.post('/',function(req,res){
    res.send(`Hola ${req.body.name}`);
});

app.listen(3000);