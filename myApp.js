const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcrypt');

const app = express();

// ✅ Aplica cada middleware de Helmet correctamente
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.dnsPrefetchControl());

const ninetyDaysInSeconds = 90 * 24 * 60 * 60;
app.use(
  helmet.hsts({
    maxAge: ninetyDaysInSeconds,
    force: true,
  })
);

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-cdn.com"],
    },
  })
);

// 🔒 Ejemplo de uso de bcrypt
const saltRounds = 12;
const myPlaintextPassword = 'somesupersecret';

bcrypt
  .hash(myPlaintextPassword, saltRounds)
  .then((hash) => console.log('Hashed password:', hash))
  .catch((err) => console.error(err));

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
