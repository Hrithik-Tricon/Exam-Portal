import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
<<<<<<< HEAD
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

=======
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
   
    {path:'**', component:LoginComponent},
];
>>>>>>> cb8508d1fb7846e3d2244785dea9a1918a40db56
