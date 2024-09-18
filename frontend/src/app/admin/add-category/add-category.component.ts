import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../services/category.model'; // Import Category interface
import { isPlatformBrowser } from '@angular/common'; // To check if platform is browser
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'; // Import CKEditorModule

@Component({
  selector: 'app-add-category',
  standalone: true, // Use standalone component approach
  imports: [CKEditorModule, FormsModule], // Declare imports once
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  public editor: any;
  public editorData: string = ''; // Bind editor data
  public isBrowser: boolean;

  category: Category = {
    name: '', // Add the 'name' field
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, // Inject PLATFORM_ID to check if platform is browser
    private _category: CategoryService,
    private _snack: MatSnackBar
  ) {
    // Check if the platform is browser
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      // Dynamically import CKEditor only in the browser environment
      import('@ckeditor/ckeditor5-build-classic').then((module) => {
        this.editor = module.default;
      });
    }
  }

  ngOnInit(): void {}

  formSubmit() {
    if (this.category.name.trim() === '' || this.category.name == null) { 
      this._snack.open('Name Required !!', '', {
        duration: 3000,
      });
      return;
    }

    // Add category
    this._category.addCategory(this.category).subscribe(
      (data: any) => {
        this.category.name = ''; // Reset 'name'
        Swal.fire('Success !!', 'Category is added successfully', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Server error !!', 'error');
      }
    );
  }
}
