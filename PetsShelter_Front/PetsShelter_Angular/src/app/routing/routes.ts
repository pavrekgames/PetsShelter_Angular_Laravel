import { UserLogged } from './../services/user-logged.service';
import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { PetsAdoptPageComponent } from "../pets-adopt-page/pets-adopt-page.component";
import { PetsSickPageComponent } from "../pets-sick-page/pets-sick-page.component";
import { AddPetComponent } from "../add-pet/add-pet.component";
import { UserNotLogged, UserNotLoggedService } from "../services/user-not-logged.service";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Strona domowa'
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UserNotLogged],
    title: 'Rejestracja'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UserNotLogged],
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
    canActivate: [UserLogged],
    title: 'Dodaj zwierzę'
  },
  {
    path: 'edit-profile',
    component: PetsSickPageComponent,
    canActivate: [UserLogged],
    title: 'Edytuj profil'
  },
  {
    path: 'my-pets',
    component: PetsSickPageComponent,
    canActivate: [UserLogged],
    title: 'Moje zwierzęta'
  },
  {
    path: 'saved-pets',
    component: PetsSickPageComponent,
    canActivate: [UserLogged],
    title: 'Zapisane zwierzęta'
  }
];

export default routeConfig;
