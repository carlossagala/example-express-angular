
let compression = require('compression');
let express = require('express');
let logger = require('morgan');
let https = require('https');
let http = require('http');
let bodyParser = require('body-parser')
var methodOverride = require('method-override');
let proxy = require('http-proxy-middleware');

let app = express();

var port = process.env.PORT || 8080;

console.log('——————————- Run on port '+ port);
app.use(express.static(__dirname+ '/dist'));

//delega el manejo de las rutas a la aplicacion frontend
app.get('*', (req, res) => {
    res.sendFile(__dirname+ '/dist/index.html');
  });

app.use(compression());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.listen(port);
