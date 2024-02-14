import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  users: { username: string, password: string }[] = [
    { username: "manel", password: "arroz" },
  ];

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      this.isLoggedIn = true; 
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  userExists(username: string): boolean {
    return this.users.some(user => user.username === username);
  }

  addUser(user: { username: string, password: string }) {
    this.users.push(user);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}