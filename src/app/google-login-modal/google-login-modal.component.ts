// google-login-modal.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-google-login-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-login-modal.component.html',
  styleUrls: ['./google-login-modal.component.css']
})
export class GoogleLoginModalComponent {
  @Output() onClose = new EventEmitter<void>();
  showModal: boolean = true;

  constructor(private afAuth: AngularFireAuth, private router: Router) {} // Inject AngularFireAuth

  async signInWithGoogle() {
    try {
      const credentials = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      // Handle the credentials
      this.closeModal();
      this.navigateToDashboard(); // Navigate to the Dashboard upon successful sign-in
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }
  
  navigateToDashboard() {
    this.router.navigate(['/dashboard']); // Navigate to the Dashboard component
  }

  closeModal(): void {
    this.onClose.emit();
  }
}
