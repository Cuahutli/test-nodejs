// server.js
// BASE
// =============================================================================

/*jslint node: true */
/*jshint strict: true */

"use strict";
var express    = require('express');        // Llamamos a Express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/introduccionMean'); // Conexión a la base de datos

var app = express();                 // Definimos nuestra App usando Express
// Configuramos la app para que use bodyParser()
// Esto nos permitirá manejar peticiones POST
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;        // Indicamos el puerto que vamos a utilizar.

// DEFINIMOS RUTAS
// =============================================================================
var router = express.Router();              // creamos una instancia del Router de Express

// Controlador Todo
var todo_controller = require('./server/controllers/todo');

// Creamos la ruta principal.
router.get('/', function (req, res) {
	res.send('Hola mundo! con brackets');
});


router.route('/todo')
    .get(todo_controller.listTodo)
    .post(todo_controller.newTodo)
    .put(todo_controller.updateTodo);

// Si te pasan un parametro vía GET después de /todo, realiza las siguientes acciones:
router.route('/todo/:id')
    .delete(todo_controller.deleteTodo);

// Indicamos a Express que trabajaremos con / como base (Podría ser que todas las rutas quisieramos que iniciaran con /api, por ejemplo)

//app.use('/', router);
app.use('/api', router);


// INICIAMOS EL SERVIDOR
// =============================================================================
app.listen(port);
console.log('Ejecutandose en el puerto: ' + port);
