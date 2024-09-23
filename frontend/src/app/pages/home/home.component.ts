import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule], // Add RouterModule to imports array
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
