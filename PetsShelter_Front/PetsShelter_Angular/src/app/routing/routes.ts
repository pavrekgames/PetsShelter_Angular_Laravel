import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { PetsAdoptPageComponent } from "../pets-adopt-page/pets-adopt-page.component";
import { PetsSickPageComponent } from "../pets-sick-page/pets-sick-page.component";
import { AddPetComponent } from "../add-pet/add-pet.component";
import { loggedGuard } from '../guards/logged.guard';
import { notLoggedGuard } from '../guards/not-logged.guard';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Strona domowa'
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [notLoggedGuard],
    title: 'Rejestracja'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [notLoggedGuard],
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
    component: AddPetComponent,
    canActivate: [loggedGuard],
    title: 'Dodaj zwierzę'
  },
  {
    path: 'edit-profile',
    component: PetsSickPageComponent,
    canActivate: [loggedGuard],
    title: 'Edytuj profil'
  },
  {
    path: 'my-pets',
    component: PetsSickPageComponent,
    canActivate: [loggedGuard],
    title: 'Moje zwierzęta'
  },
  {
    path: 'saved-pets',
    component: PetsSickPageComponent,
    canActivate: [loggedGuard],
    title: 'Zapisane zwierzęta'
  }
];

export default routeConfig;
