const mongoose = require ('mongoose');

const pacienteSchemas = mongoose.Schema({
    nombre:{
        type:String,
        required:[true],
        trim:true,
        maxLength :[120]
    },
    apellido:{
        type:String,
        required:[true],
        trim:true,
        maxLength :[120]

    },
    correo:{
        type:String,
        required:[true],
        trim:true,
        maxLength :[120]

    },
    genero:{
        type:String,
        trim:true,
    },
    telefono:{
        type:Number,
        required:[true],   
    },
    fechaNacimiento:{
        type:Date,
        required:[true]
    }


})

module.exports = mongoose.model('pacientes', pacienteSchemas);