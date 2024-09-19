import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper'; // Adjust the path if needed

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Add a new user
  public addUser(user: any): Observable<any> {
    return this.http.post(`${baseUrl}/user/`, user);
  }

  // Get the current user
  public getCurrentUser(): Observable<any> {
    return this.http.get(`${baseUrl}/user/current`); // Adjust the endpoint if needed
  }
}
