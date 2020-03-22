// Importa Mongoose
const mongoose = require('mongoose');

// define Schema
const Schema = mongoose.Schema;

// Define la estructura de la base de datos
const patienceSchema = new Schema({
   name: {
      type: String,
      trim: true        // En caso de espacios en blanco, los elimina
   },
   owner:{
      type: String,
      trim: true
   },
   date: {
      type: String,
      trim: true
   },
   hour: {
      type: String,
      trim: true
   },
   symptom: {
      type: String,
      trim: true
   }
});

// Exportamos el modelo de la base de datos
module.exports = mongoose.model('Paciente', patienceSchema);