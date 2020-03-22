// Importamos el modelo de la base de datos
const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo cliente
exports.newClient = async (request, response, next) =>{
   const paciente = new Paciente(request.body);
   try {
      await paciente.save();
      response.json({mensaje: 'El cliente se agregó correctamente'});
   } catch (error) {
      console.log(error);
      next();
   }
}