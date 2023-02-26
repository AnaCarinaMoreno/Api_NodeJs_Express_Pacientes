const app = require ('./app');
const conectData = require ('./config/database.js')


//setear el archivo de configuración 
const dotenv = require('dotenv');
dotenv.config({path: 'src/config/pac.env'});

//conectar la base de datos
conectData ();


//llamada al servidor 
const server =  app.listen(process.env.PORT, () => {
    console.log (`servidor iniciado en el puerto ${process.env.PORT}`)

});