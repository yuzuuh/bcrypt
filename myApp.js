const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcrypt');

const app = express();

// 🔒 Usa cada middleware de Helmet por separado
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.crossOriginEmbedderPolicy({ policy: 'credentialless' }));
app.use(helmet.crossOriginOpenerPolicy({ policy: 'same-origin' }));
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

// 🧂 Ejemplo de bcrypt
const saltRounds = 12;
const password = 'myPassword123';

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error al hashear:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});

module.exports = app;













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
