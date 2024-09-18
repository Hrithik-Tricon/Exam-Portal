import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../services/login.service';

// Define the User type
export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  authorities: Array<{ authority: string }>;
  enabled: boolean;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }
}
