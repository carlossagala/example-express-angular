
import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'AUTH_URL_REPLACEABLE',
  realm: 'REALM_SSO_REPLACEABLE',
  clientId: 'CLIENT_SSO_REPLACEABLE'
};

export const environment = {
  production: true,
  keycloak: keycloakConfig
};
