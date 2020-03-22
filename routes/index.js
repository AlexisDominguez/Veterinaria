// Importamos Express Router, herramienta de direccionamiento
const express = require('express');
const router = express.Router();
const PacienteController = require('../controllers/PacienteControllers');

module.exports = () =>{
   
   router.get('/', () =>{
      console.log("Petición enviada");
   })

   router.post('/pacientes',
      PacienteController.newClient
   )

   return router;
}