// google-login-modal.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-google-login-modal',
  standalone: true, // This marks the component as standalone
  imports: [CommonModule], // Import CommonModule here if you're using any of its features
  templateUrl: './google-login-modal.component.html',
  styleUrls: ['./google-login-modal.component.css']
})
export class GoogleLoginModalComponent {
  @Output() onClose = new EventEmitter<void>();
  showModal: boolean = true; // Add this line to control the modal display

  constructor(public afAuth: AngularFireAuth) {}

  async signInWithGoogle() {
    const credentials = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // Handle the credentials
    this.closeModal();
  }

  closeModal(): void {
    this.onClose.emit();
  }
  
}
