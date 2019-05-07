import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Constants} from '../utils/constants'




@Injectable({
  providedIn: 'root'
})
export class CuitService {

  constructor(protected keycloakService: KeycloakService, private http: HttpClient) { }

  consultarCuit(cuit: string): Observable<any>{

    return this.http.get<any>(Constants.API_ENDPOINT + 'api/cuit/' + cuit);

  }





}
