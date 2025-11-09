const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcrypt');

const app = express();

// Primero, ocultamos el header de Express
app.use(helmet.hidePoweredBy());

// Luego, aplicamos el resto de políticas de seguridad
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-cdn.com"]
    }
  },
  crossOriginEmbedderPolicy: false,
  crossOriginOpenerPolicy: { policy: "same-origin" },
  crossOriginResourcePolicy: { policy: "same-origin" },
  frameguard: { action: 'deny' },
  hsts: { maxAge: 90 * 24 * 60 * 60, force: true },
  noSniff: true,
  ieNoOpen: true,
  dnsPrefetchControl: true
}));

const saltRounds = 12;
const myPlaintextPassword = "somesupersecret";

bcrypt.hash(myPlaintextPassword, saltRounds)
  .then(hash => console.log("Hashed password:", hash))
  .catch(err => console.error(err));

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
