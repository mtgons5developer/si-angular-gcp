// login-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass and other directives
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [FormsModule, CommonModule], // Import CommonModule here
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'] // Correct the property name from 'styleUrl' to 'styleUrls'
})
export class LoginModalComponent {
  
  @Input() showModal: boolean | undefined;
  @Output() onClose = new EventEmitter<void>();
  @Output() onGoogleLogin = new EventEmitter<void>();

  currentTab: 'password' | 'phone' = 'password';
  loginData = {
    email: '',
    password: ''
  };
  phoneData = {
    number: ''
  };

  // constructor(public afAuth: AngularFireAuth) {}

  // async signInWithGoogle() {
  //   const credentials = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  //   // Handle the credentials
  //   this.close();
  // }

  // Call this method when the Google button is clicked
  googleLogin(): void {
    this.onGoogleLogin.emit();
  }  
  
  // Call this method to close the modal
  close(): void {
    console.log('close called'); // Check if this logs when you click the close button
    this.onClose.emit(); // Emit an event in case the parent component needs to know
  }

  login() {
    // Handle login with email and password
  }

  sendCodeViaSMS() {
    // Handle sending code via SMS
  }

  sendCodeViaWhatsApp() {
    // Handle sending code via WhatsApp
  }

  // ... any additional component logic
}