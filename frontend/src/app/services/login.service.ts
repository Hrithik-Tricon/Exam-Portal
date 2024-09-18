import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import baseUrl from './helper';

// Define the User interface
export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  authorities: Array<{ authority: string }>;
  enabled: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  // Get current user
  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${baseUrl}/current-user`);
  }

  // Generate token
  public generateToken(loginData: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/generate-token`, loginData);
  }

  // Login user: set token in localStorage
  public loginUser(token: string): boolean {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
      return true;
    }
    return false;
  }

  // Check if user is logged in
  public isLoggedIn(): boolean {
    if (this.isBrowser()) {
      const tokenStr = localStorage.getItem('token');
      return tokenStr !== null && tokenStr !== '';
    }
    return false;
  }

  // Logout: remove token from local storage
  public logout(): boolean {
    if (this.isBrowser()) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return true;
    }
    return false;
  }

  // Get token
  public getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('token');
    }
    return null;
  }

  // Set user details
  public setUser(user: User): void {
    if (this.isBrowser()) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  // Get user details
  public getUser(): User | null {
    if (this.isBrowser()) {
      const userStr = localStorage.getItem('user');
      if (userStr !== null) {
        return JSON.parse(userStr);
      } else {
        this.logout();
        return null;
      }
    }
    return null;
  }

  // Get user role
  public getUserRole(): string {
    const user = this.getUser();
    return user ? user.authorities[0].authority : '';
  }

  // Check if running in browser
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
