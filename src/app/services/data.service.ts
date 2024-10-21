// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  full_name: string;
  age: number;
  major: string;
  email: string;
  phone_number: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = '../data/dataToDisplay.json';

  constructor(private http: HttpClient) {}
  
  getData(): Observable<User[]> {
    return this.http.get<User[]>(this.dataUrl);
  }
}
