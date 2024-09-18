import { Component, OnInit } from '@angular/core';
import { SidebarComponent1 } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl:'./user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  imports: [SidebarComponent1],
  standalone: true,
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
