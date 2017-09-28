import {Routes, RouterModule} from "@angular/router";
import {NavbarComponent} from "./modules/navbar/navbar.component";
const ROUTES: Routes = [{
  path : '',
  pathMatch : 'full',
  redirectTo : '/login'
}, {
  path : 'login',
  component :  NavbarComponent
}];

export const routing = RouterModule.forRoot(ROUTES);