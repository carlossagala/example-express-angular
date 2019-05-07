
let compression = require('compression');
let express = require('express');
let logger = require('morgan');
let https = require('https');
let http = require('http');
let bodyParser = require('body-parser')

let proxy = require('http-proxy-middleware');

let app = express();

var port = process.env.PORT || 8080;
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var router = express.Router();

console.log('——————————- Run on port '+ port);

/****************************** Router ***************************/
router.get('*', function(req, res){
    res.sendFile('index.html', { root: __dirname + '/dist' });
});

// proxy for consulta cuil backend

app.set('consulta-service', process.env.CONSULTA_ENDPOINT || 'http://consulta-app:8080');

app.use(compression());

app.use(logger('combined'));

app.use(
  '/consulta-api/*',
  proxy({
    target: app.get('consulta-service'),
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      '^/consulta-service': ''
    }
  })
);
/****************************** /Router ***************************/

//app.use(morgan('dev')); // log every request to the console
app.use(express.static(__dirname + '/dist')); // Static (public) folder

app.use(bodyParser.urlencoded({extended:true}));// get information from html forms
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use('/', router); // app.use('/parent', router); call all from localhost:port/parent/*

app.listen(port);
