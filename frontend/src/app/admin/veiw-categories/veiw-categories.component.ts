import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';

// Remove SSR specific code if it's not being used
// declare var window: any; // Only use this if necessary and in a client-side context

@Component({
  selector: 'app-view-categories',
  templateUrl: './veiw-categories.component.html',
  styleUrls: ['./veiw-categories.component.scss'],
})
export class ViewCategoriesComponent implements OnInit {
  categories: any[] = []; // Define the type based on your data model

  constructor(private _category: CategoryService) {}

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data: any) => {
        // Handle the response
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        // Handle the error
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }
}
