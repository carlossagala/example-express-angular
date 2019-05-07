import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppAuthGuard } from './keycloak/AppAuthGuard';
import {CuitComponent} from './cuit/cuit.component'
import {AppComponent} from './app.component'


const routes: Routes = [  {
  path: '',
  redirectTo: '/cuit',
  pathMatch: 'full'
},{
  path: 'cuit',
  component: CuitComponent,
  canActivate: [AppAuthGuard],
//  data: { roles: ['normal'] }

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
