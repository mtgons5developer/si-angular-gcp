// app.component.ts
import { Component } from '@angular/core';
import { LoginModalComponent } from './login-modal/login-modal.component'; // Import the LoginModalComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginModalComponent], // Import the LoginModalComponent here
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
}
