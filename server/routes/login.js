const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Usuario = require('../models/usuario')
const app = express()


app.post('/login', (req, res) => {

    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if(err){
            return res.status(500).json({
                ok: false,
                err
            })
        }

        //si el usuario no existe:
        if(!usuarioDB){
            return res.status(400).json({
                ok: false,
                message: '(Usuario) o contraseña incorrectos'
            })
        }

        //comprobamos si la contraseña es correcta:
        if( !bcrypt.compareSync(body.password, usuarioDB.password)){
            return res.status(400).json({
                ok: false,
                message: 'Usuario o contraseña incorrectos'
            })
        }

        //generamos el token(jwt).
        //se manda el payload(usuarioDB)
        //se manda el secret(cadena para que coincida server y cliente)
        //expiración, en este caso 30 días
        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, {expiresIn: process.env.CADUCIDAD_TOKEN})

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        })

    })
})


module.exports = app;