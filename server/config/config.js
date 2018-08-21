//=====================
//PUERTO
//=====================
process.env.PORT = process.env.PORT || 5000


//=====================
//ENTORNO
//=====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=====================
//BASES DE DATOS
//=====================
if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
}else{
    urlDB = 'mongodb://omar:heroes1@ds125872.mlab.com:25872/cafe'
}

process.env.URLDB = urlDB

