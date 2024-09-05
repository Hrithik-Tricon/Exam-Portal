import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  // Route for the login page
  { path: 'login', component: LoginComponent },

  // Route for the profile page
  { path: 'profile', component: ProfileComponent },

  // Default route that redirects to the login page
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Wildcard route in case no matching route is found
  { path: '**', redirectTo: '/login' }
];

