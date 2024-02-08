import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Strona domowa'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Rejestracja'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Logowanie'
  }
];

export default routeConfig;
