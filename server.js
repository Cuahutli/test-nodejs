// server.js

// BASE
// =============================================================================

// Usamos los paquetes que necesitamos
var express    = require('express');        // Llamamos a Express
var app        = express();                 // Definimos nuestra App usando Express
var bodyParser = require('body-parser');

// Configuramos la app para que use bodyParser()
// Esto nos permitirá manejar peticiones POST
app.use(bodyParser());

var port = process.env.PORT || 3000;        // Indicamos el puerto que vamos a utilizar.

// DEFINIMOS RUTAS
// =============================================================================
var router = express.Router();              // creamos una instancia del Router de Express

// Creamos la ruta principal.
router.get('/', function(req, res) {
    res.send('Hola mundo!');
});

// Indicamos a Express que trabajaremos con / como base (Podría ser que todas las rutas quisieramos que iniciaran con /api, por ejemplo)

app.use('/', router);

// INICIAMOS EL SERVIDOR
// =============================================================================
app.listen(port);
console.log('Ejecutandose en el puerto: ' + port);
