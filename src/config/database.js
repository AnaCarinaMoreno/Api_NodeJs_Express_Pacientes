const mongoose = require ('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: 'src/config/pac.env'});



const conectData = () => {
    mongoose.connect(process.env.DB_URI,{
       useNewUrlParser: true,
       useUnifiedTopology:true 
    
       }).then (con =>{
            console.log(`Base de datos mongo connectada con el servidor  ${con.connection.host}`)
     
       })
 
 }
 module.exports = conectData;