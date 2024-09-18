import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  loginData = {
    name: '',
    username: '',
    password: ''
  };

  formSubmit(form: any) {
    // Handle form submission logic here
    console.log(this.loginData);
  }

  resetForm(form: any) {
    // Reset form fields
    form.reset();
    this.loginData = { name: '', username: '', password: '' };
  }
}
