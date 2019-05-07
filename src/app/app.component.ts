import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userDetails: KeycloakProfile;

  constructor(private keycloakService: KeycloakService) {}

  async ngOnInit() {
    this.keycloakService.isLoggedIn().then(
      isLogged => {
        if (isLogged) {
          this.keycloakService.loadUserProfile().then(userData => {
            this.userDetails = userData
          })
          this.keycloakService.getToken().then(token => console.log(token));
        }
      }
    )
  }

  async doLogout() {
    await this.keycloakService.logout();
  }
}
