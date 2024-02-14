import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "";
  password = "";
  errorMessage = "";

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.username.trim().length === 0) {
      this.errorMessage = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMessage = "Password is required";
    } else {
      const isAuthenticated = this.auth.login(this.username, this.password);
      if (isAuthenticated) {
        this.router.navigate(['home']);
      } else {
        this.errorMessage = "Invalid credentials";
      }
    }
  }

  createNewUser() {
    this.router.navigate(['user']);
  }
}
