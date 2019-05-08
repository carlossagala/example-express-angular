'use strict';


const replace = require('replace-in-file');
//------------------------RHSSO-----------------------------
const KEYCLOAK_ENABLE = process.env.KEYCLOAK_ENABLE || 'true';
const AUTH_URL = process.env.AUTH_URL || 'http://localhost:8080/auth';
const CLIENT_SSO = process.env.CLIENT_SSO || 'ui'
const REALM_SSO = process.env.REALM_SSO || 'net-core'
const files = 'dist/main.*'



const enableRHSSOptions = {
  files: files,
  from: 'KEYCLOAK_ENABLE',
  to: KEYCLOAK_ENABLE,
};

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
  replace.sync(enableRHSSOptions);

}
catch (error) {
  console.error('Error occurred:', error);
}
//--------ANGULAR-CONSTANTS----------------------


const CONSULTA_ENDPOINT = process.env.CONSULTA_ENDPOINT || 'http://localhost:8080'
const consultaOptions = {
  files: files,
  from: 'CONSULTA_ENDPOINT',
  to: CONSULTA_ENDPOINT,
};

try {
  replace.sync(consultaOptions);
}
catch (error) {
  console.error('Error occurred:', error);
}
