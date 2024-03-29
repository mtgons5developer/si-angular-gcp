// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    // ... any other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Import HttpClientModule to make HTTP requests
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule    
  ],
  providers: [
    ApiService // Provide your service here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
