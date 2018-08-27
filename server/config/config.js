//=====================
//PUERTO
//=====================
process.env.PORT = process.env.PORT || 5000


//=====================
//ENTORNO
//=====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=====================
<<<<<<< HEAD
//VENCIMIENTO DEL TOKEN
//=====================
process.env.CADUCIDAD_TOKEN = 60*60*24*30

//=====================
//SEED DE AUTENTICACIÓN
//=====================
//cargo el seed también en heroku. El seed de heroku debe ser diferente a este que
//es solo para desarrollo('mi-seed-de-desarrollo')
//process.env.SEED es la config var dentro de heroku!!
process.env.SEED = process.env.SEED || 'mi-seed-de-desarrollo'


//=====================
=======
>>>>>>> d524d07f2d03b9850cfcfadf89f787e3c4710cf6
//BASES DE DATOS
//=====================
if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
}else{
    urlDB = process.env.MONGO_URI
}

process.env.URLDB = urlDB

