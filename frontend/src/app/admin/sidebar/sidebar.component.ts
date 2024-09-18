import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';  // CKEditor build
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular'; // Import CKEditorComponent

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    CKEditorModule,
    FormsModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public Editor = ClassicEditor;  // Assign ClassicEditor to Editor
  public content: string = '';    // Variable to hold CKEditor content

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onEditorReady(editor: any) {
    // Do something with the editor instance if needed
    console.log('Editor is ready', editor);
  }
}
