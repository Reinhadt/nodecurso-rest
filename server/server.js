require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser');

//Config de bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

<<<<<<< HEAD
//Configuración global de rutas
app.use(require('./routes/index'))
=======
app.use(require('./routes/usuario'))

>>>>>>> d524d07f2d03b9850cfcfadf89f787e3c4710cf6

mongoose.connect(process.env.URLDB, (err, res) =>{
    if(err) throw err;
    console.log('ROCANROLDB')
});

app.listen(process.env.PORT, () => {
    console.log("ROCANROL")
})