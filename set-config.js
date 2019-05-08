'use strict';


const replace = require('replace-in-file');

//------------------------RHSSO-----------------------------
const AUTH_URL = process.env.AUTH_URL || 'http://localhost:8080/auth';
const CLIENT_SSO = process.env.CLIENT_SSO || 'ui'
const REALM_SSO = process.env.REALM_SSO || 'net-core'
const files = 'dist/main.*'


const authUrlOptions = {
  files: files,
  from: 'AUTH_URL',
  to: AUTH_URL,
};

const clientNameOptions = {
  files: files,
  from: 'CLIENT_SSO',
  to: CLIENT_SSO,
};

const realmNameOptions = {
  files: files,
  from: 'REALM_SSO',
  to: REALM_SSO,
};

try {
  replace.sync(authUrlOptions);
  replace.sync(clientNameOptions);
  replace.sync(realmNameOptions);
}
catch (error) {
  console.error('Error occurred:', error);
}


//--------ANGULAR-CONSTANTS----------------------


const CONSULTA_ENDPOINT = process.env.CONSULTA_ENDPOINT || ''
const realmNameOptions = {
  files: files,
  from: 'CONSULTA_ENDPOINT',
  to: CONSULTA_ENDPOINT,
};
