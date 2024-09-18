import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',  // Use templateUrl to point to the external HTML file
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  editor: any;  // Define the editor property if you plan to use CKEditor

  constructor() { }

  ngOnInit(): void {
    // Initialize editor or perform any setup if needed
  }

}
