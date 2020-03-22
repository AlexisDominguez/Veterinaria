// Importar con Express
const express = require('express');
// Importar Mongoose
const mongoose = require('mongoose');
//Importamos el archivo routes
const routes = require('./routes/index');
// Importamos Body Parser
const bodyParser = require('body-parser');
// Contectar con Express
const server = express();

// Conectar a MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://AlexisDominguez:11399102a@my-free-cluster-ojd2d.mongodb.net/veterinaria?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: false 
});

// Habilitar Body Parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// Habilitar routing
server.use('/', routes());

// Define el puerto y la respuesta de la conexión
server.listen(4000, () => console.log("servidor funcionando"));