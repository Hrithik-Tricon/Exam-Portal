import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  // Array to store teacher objects
  teachers: { name: string; email: string; subject: string }[] = [];

  teacher = {
    name: '',
    email: '',
    subject: ''
  };

  onInputChange(event: Event, field: keyof typeof this.teacher) {
    const target = event.target as HTMLInputElement;
    this.teacher[field] = target.value; // Assign value to the corresponding field
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission

    // Form validation - Ensure all fields are filled
    if (this.teacher.name && this.teacher.email && this.teacher.subject) {
      // Add the teacher to the array
      this.teachers.push({ ...this.teacher });

      console.log('Teacher added:', this.teacher);
      alert('Teacher has been added!');

      // Reset the form after submission
      this.teacher = { name: '', email: '', subject: '' };
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Getter to return the total number of teachers
  get teacherCount(): number {
    return this.teachers.length;
  }
}
