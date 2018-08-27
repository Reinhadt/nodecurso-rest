require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser');

//Config de bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(require('./routes/index'))


app.listen(process.env.PORT, () => {
    console.log("ROCANROL")
})