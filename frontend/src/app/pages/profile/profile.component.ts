import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../services/login.service';
// import { User } from '../../models/user.model'; // Adjust the import path

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(
      (user: User | null) => {
        this.user = user;
      },
      (error) => {
        alert('Error fetching user');
      }
    );
  }
}
