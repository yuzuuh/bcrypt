const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcrypt');

const app = express();

// Helmet configuración (versión 7)
app.use(helmet()); // versión simple, segura y válida para freeCodeCamp

// Ejemplo con bcrypt
const saltRounds = 12;
const myPlaintextPassword = "somesupersecret";

bcrypt.hash(myPlaintextPassword, saltRounds)
  .then(hash => console.log("Hashed password:", hash))
  .catch(err => console.error(err));

// Exportar app
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
