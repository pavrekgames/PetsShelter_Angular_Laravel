import { PetsAdoptPageComponent } from './pets-adopt-page/pets-adopt-page.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPetComponent } from './add-pet/add-pet.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { PetAdoptPageComponent } from './pet-adopt-page/pet-adopt-page.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { EditPetPhotoComponent } from './edit-pet-photo/edit-pet-photo.component';
import { ConfirmBoxConfigModule, DialogConfigModule, NgxAwesomePopupModule, ToastNotificationConfigModule } from '@costlydeveloper/ngx-awesome-popup';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SavedPetsComponent } from './saved-pets/saved-pets.component';
import { TokensComponent } from './tokens/tokens.component';
import { SickPetsPageComponent } from './sick-pets-page/sick-pets-page.component';
import { SickPetComponent } from './sick-pet/sick-pet.component';
import { SickPetsManagerComponent } from './sick-pets-manager/sick-pets-manager.component';
import { AddSickPetComponent } from './add-sick-pet/add-sick-pet.component';
import { EditSickPetComponent } from './edit-sick-pet/edit-sick-pet.component';
import { EditSickPetPhotoComponent } from './edit-sick-pet-photo/edit-sick-pet-photo.component';
import { UsersComponent } from './users/users.component';
import { SearchPipe } from './pipes/search.pipe';
import { MessagesPanelComponent } from './messages-panel/messages-panel.component';
import { MessageListElementComponent } from './message-list-element/message-list-element.component';
import { MessagesBarComponent } from './messages-bar/messages-bar.component';
import { ConversationComponent } from './conversation/conversation.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MessageComponent } from './message/message.component';
import { BundleComponent } from './bundle/bundle.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PetsAdoptPageComponent,
    PetToAdoptComponent,
    SickPetsPageComponent,
    AddPetComponent,
    MyPetsComponent,
    PetAdoptPageComponent,
    EditPetComponent,
    EditPetPhotoComponent,
    EditProfileComponent,
    SavedPetsComponent,
    TokensComponent,
    SickPetComponent,
    SickPetsManagerComponent,
    AddSickPetComponent,
    EditSickPetComponent,
    EditSickPetPhotoComponent,
    UsersComponent,
    SearchPipe,
    MessagesPanelComponent,
    MessageListElementComponent,
    MessagesBarComponent,
    ConversationComponent,
    MessageComponent,
    BundleComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxAwesomePopupModule.forRoot(),
    DialogConfigModule.forRoot(),
    ConfirmBoxConfigModule.forRoot(),
    ToastNotificationConfigModule.forRoot(),
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration(),
    provideRouter(routeConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
