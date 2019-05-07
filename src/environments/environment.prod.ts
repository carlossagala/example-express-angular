
import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'AUTH_URL',
  realm: 'REALM_SSO',
  clientId: 'CLIENT_SSO'
};

export const environment = {
  production: true,
  keycloak: keycloakConfig
};
