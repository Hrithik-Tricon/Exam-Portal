import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper'; // Assumed to be a utility for the base URL of your API
import { Category } from './category.model'; // Import the Category interface

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _http: HttpClient) {}

  // Load all the categories
  public categories() {
    return this._http.get<Category[]>(`${baseUrl}/category/`); // Specify the expected return type
  }

  // Add new category
  public addCategory(category: Category) { // Specify the parameter type
    return this._http.post(`${baseUrl}/category/`, category);
  }
}
