import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, provideRouter } from '@angular/router';
import routeConfig from './routing/routes';
import { HomeComponent } from './home/home.component';
import { PetToAdoptComponent } from './pet-to-adopt/pet-to-adopt.component';
import { PetsAdoptPageComponent } from './pets-adopt-page/pets-adopt-page.component';
import { PetsSickPageComponent } from './pets-sick-page/pets-sick-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPetComponent } from './add-pet/add-pet.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MyPetsComponent } from './my-pets/my-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PetToAdoptComponent,
    PetsAdoptPageComponent,
    PetsSickPageComponent,
    AddPetComponent,
    MyPetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideRouter(routeConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
