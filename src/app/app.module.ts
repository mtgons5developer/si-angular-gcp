//app.module.ts
//NonStandaloneComponent
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/prod/environment.prod';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AppComponent } from './app.component';

const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, 
    LoginModalComponent,
    AppComponent,    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    CommonModule,
    FormsModule,
  ],
  exports: [],
  bootstrap: [],
})
export class AppModule {}
// export class SignupModule { }
