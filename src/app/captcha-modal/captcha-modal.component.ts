// captcha-modal.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-captcha-modal',
  templateUrl: './captcha-modal.component.html',
  styleUrls: ['./captcha-modal.component.css']
})
export class CaptchaModalComponent {
  @Output() onClose = new EventEmitter<void>();
  @Output() onVerified = new EventEmitter<void>();

  captchaResolved(response: string): void {
    // You can use the response token to verify with your backend
    this.onVerified.emit();
    this.close();
  }

  close(): void {
    this.onClose.emit();
  }
}
