require('./config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

//Config de bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/usuario', (req, res) => {
    res.json("OLA")
})

app.post('/usuario', (req, res) => {

    //req.body obtiene el body de x-www-form-urlencoded
    //o sea, data de formularios
    let body = req.body

    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es neceario'
        })
    }else{
        res.json({body})
    }
})

app.put('/usuario/:id', (req, res) => {
    let id = req.param.id
    
    res.json({"id": id})
})

app.delete('/usuario', (req, res) => {
    res.json("deleteOLA")
})


app.listen(process.env.PORT, () => {
    console.log("ROCANROL")
})