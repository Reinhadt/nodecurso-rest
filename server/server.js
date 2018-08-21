require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser');

//Config de bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(require('./routes/usuario'))


mongoose.connect(process.env.URLDB, (err, res) =>{
    if(err) throw err;
    console.log('ROCANROLDB')
});

app.listen(process.env.PORT, () => {
    console.log("ROCANROL")
})