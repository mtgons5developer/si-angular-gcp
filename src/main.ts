// main.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from '../src/environments/prod/environment.prod';
import { HttpClientModule } from '@angular/common/http';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
    // ... any other global providers
  ]
}).catch(err => console.error(err));