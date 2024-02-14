import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  username = "";
  password = "";
  errorMessage = "";

  constructor(private auth: AuthService, private router: Router) {}


  isValidForm(): boolean {
    return this.username.length >= 3 && this.password.length >= 5;

  }
  createUser() {
    if (this.username.trim().length === 0) {
      this.errorMessage = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMessage = "Password is required";
    } else {
      this.errorMessage = "";

      if (!this.isValidForm()) {
        this.errorMessage = 'Username must be at least 3 characters and password must be at least 5 characters';
        return;
    }
  
      const userExists = this.auth.userExists(this.username);
      if (userExists) {
        this.errorMessage = "Username already exists";
      } else {
        this.auth.addUser({ username: this.username, password: this.password });
        this.router.navigate(['login']);
      }
    }
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
