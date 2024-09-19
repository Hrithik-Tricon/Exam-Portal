import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  // Dependency injection in the constructor
  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    private router: Router,
    private fb: FormBuilder // Inject FormBuilder
  ) {
    // Initialize loginForm in the constructor
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // No need to initialize loginForm here as it's done in the constructor
  }

  formSubmit() {
    if (this.loginForm.invalid) {
      this.snack.open('Please fill in all required fields.', '', {
        duration: 3000,
      });
      return;
    }

    const loginData = this.loginForm.value;

    // Request to server to generate token
    this.login.generateToken(loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        // Login...
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);

          // Redirect based on user role
          if (this.login.getUserRole() === 'ADMIN') {
            this.router.navigate(['admin']);
            this.login.loginStatusSubject.next(true);
          } else if (this.login.getUserRole() === 'NORMAL') {
            this.router.navigate(['user-dashboard/0']);
            this.login.loginStatusSubject.next(true);
          } else {
            this.login.logout();
          }
        });
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('Invalid Details !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }

  resetForm() {
    this.loginForm.reset();
  }
}
