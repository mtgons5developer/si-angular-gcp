// app.component.ts
//StandaloneComponent
// In summary, a standalone component is added to the @Component.imports array only when 
// it is being used within another standalone component. An NgModule is used to declare 
// non-standalone components and can still be used to organize standalone components if desired.

import { Component } from '@angular/core';
import { LoginModalComponent } from './login-modal/login-modal.component'; // Import the LoginModalComponent
import { GoogleLoginModalComponent } from './google-login-modal/google-login-modal.component'; // Adjust the path as necessary
import { CommonModule } from '@angular/common';
import { environment } from '../environments/prod/environment.prod';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
// import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = environment.firebaseConfig;

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}
  ],  
  imports: [
    LoginModalComponent,
    CommonModule, // This import fixes the NG8103 error
    GoogleLoginModalComponent, // This import fixes the NG8001 error  
    // AngularFireModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoginModalOpen: boolean = false;

  openLoginModal(): void {
    this.isLoginModalOpen = true;
  }

  closeLoginModal(): void {
    console.log('closeLoginModal called'); // Check if this logs when close emits
    this.isLoginModalOpen = false; // This should hide the modal
  }

  isGoogleLoginModalOpen: boolean = false;

  openGoogleLoginModal(): void {
    this.isLoginModalOpen = false; // Close the login modal if open
    this.isGoogleLoginModalOpen = true;
  }
  
  closeGoogleLoginModal(): void {
    this.isGoogleLoginModalOpen = false;
  }  
}
