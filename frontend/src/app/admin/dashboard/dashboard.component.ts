import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public editor: any; // Define the editor type if needed

  constructor() { }

  ngOnInit(): void {
    // Dynamic import of CKEditor to ensure it is only loaded on the client side
    import('@ckeditor/ckeditor5-build-classic').then((module) => {
      this.editor = module.default;
    });
  }
}
