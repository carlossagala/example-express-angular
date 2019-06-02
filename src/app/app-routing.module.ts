import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAuthGuard } from './keycloak/AppAuthGuard';
import {CuitComponent} from './cuit/cuit.component'
import {AppComponent} from './app.component'


const routes: Routes = [
  {
    path: 'cuit',
    component: CuitComponent
  },
  {
  path: '',
  redirectTo: '/cuit',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
