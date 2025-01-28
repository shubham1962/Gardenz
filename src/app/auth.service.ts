

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject<any>(this.getCurrentUser());
  user$ = this.user.asObservable(); // Observable to track the user state


  constructor(private http: HttpClient) { }

  // Call this method to log in a user
  login(userData: any): void {
    localStorage.setItem('user', JSON.stringify(userData));
    this.user.next(userData); // Notify the subscriber about the new user
  }

  // Call this method to log out a user
  logout(): void {
    localStorage.removeItem('user');
    localStorage.clear();
    this.user.next(null); // Notify the subscriber about the user logout
  }

  // Get the current user from localStorage (on initialization)
  getCurrentUser(): any {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  }
  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.user.next(user); // Notify subscribers
  }
  loginRequired(data: any) {
    let result = this.http.post("https://localhost:7025/login",data);
    return result;
  }
}
 