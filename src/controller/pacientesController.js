//importación del Schema
const pacientes = require ('../models/pacientesModels');

//ver lista de pacientes
exports.getPacientes = async(req, res, next)=>{
    const allpacientes = await pacientes.find();
    res.status(200).json({
      success:true,
      count:allpacientes.length,
      allpacientes  
    })
}

//ver un solo paciente
exports.getPacienteById = async(req, res, next) =>{
    const pacienteById = await pacientes.findById(req.params.id);
    if(!pacienteById){
        return res.status(404).json({
          success:false,
          message:'No se encontró el paciente' 
        })

    }
    res.status(200).json({
        success:true,
        pacienteById
    })

}

//crear información de un paciente

exports.createPaciente = async(req, res, next)=>{
    newPaciente = await pacientes.create(req.body);
    res.status(200).json({
        success:true,
        newPaciente
    })


}

//actualizar información de un paciente
//verificar si el paciente existe
exports.updatePaciente = async(req, res, next) =>{
    let pacienteById = await pacientes.findById(req.params.id);
    if(!pacienteById){
        return res.status(404).json({
          success:false,
          message:'No se encontró el paciente' 
        })

    }
    //si el paciente existe, se actualiza la informacion
    pacienteById = await pacientes.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true

    });
    res.status(200).json({
        success:true,
        message:'Información del paciente actualizado',
        pacienteById

    })


}

//Eliminar un paciente
//Verificar si el paciente existe
exports.deletePaciente = async(req, res, next)=>{
    const deletePacientById = await pacientes.findById(req.params.id);
    if(!deletePacientById){
        return res.status(404).json({
          success:false,
          message:'No se encontró el paciente' 
        })
    }
    //si el paciente existe, Eliminar su información    
    await pacientes.findByIdAndRemove({_id:req.params.id});
    res.status(200).json({
        success:true,
        message:'Información del paciente eliminada'
    })
}

