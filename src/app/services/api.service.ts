// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://us-central1-sonorous-summer-415805.cloudfunctions.net';
  
  constructor(private http: HttpClient) { }

  helloWorld(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/helloWorld?name=${name}`);
  }
}
