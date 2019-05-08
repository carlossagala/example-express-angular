import { KeycloakService } from 'keycloak-angular';
import {Constants} from './constants'
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {


      try {
        debugger
        if(Constants.KEYCLOAK_ENABLE === 'false'){
          console.log('RHSSO no esta habilitado')
        } else {
        await keycloak.init({
          config: environment.keycloak,
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
          },
          bearerExcludedUrls: []
        });

      }
      resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
