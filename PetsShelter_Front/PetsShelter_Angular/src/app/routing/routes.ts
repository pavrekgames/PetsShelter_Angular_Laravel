import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { PetsAdoptPageComponent } from "../pets-adopt-page/pets-adopt-page.component";
import { PetsSickPageComponent } from "../pets-sick-page/pets-sick-page.component";

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
  },
  {
    path: 'pets-to-adopt',
    component: PetsAdoptPageComponent,
    title: 'Zwierzęta do adopcji'
  },
  {
    path: 'sick-pets',
    component: PetsSickPageComponent,
    title: 'Chore zwierzęta'
  },
  {
    path: 'add-pet',
    component: PetsSickPageComponent,
    title: 'Dodaj zwierzę'
  },
  {
    path: 'edit-profile',
    component: PetsSickPageComponent,
    title: 'Edytuj profil'
  },
  {
    path: 'my-pets',
    component: PetsSickPageComponent,
    title: 'Moje zwierzęta'
  },
  {
    path: 'saved-pets',
    component: PetsSickPageComponent,
    title: 'Zapisane zwierzęta'
  }
];

export default routeConfig;
