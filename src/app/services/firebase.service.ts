// src/app/services/firebase.service.ts
import { Injectable, Inject } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FirebaseOptions } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(@Inject(FIREBASE_OPTIONS) private firebaseOptions: FirebaseOptions) {
    // Firebase options are available for use
  }
}
