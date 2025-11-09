const express = require('express');
const helmet = require('helmet');

const app = express();

// Configuración de Helmet con varias protecciones
app.use(
  helmet({
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
    dnsPrefetchControl: true,
    hidePoweredBy: true
  })
);

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
