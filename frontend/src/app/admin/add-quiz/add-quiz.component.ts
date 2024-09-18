import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';
import { QuizService } from '../../services/quiz.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-add-quiz',
  standalone: true,
  imports: [
    CKEditorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {
  public Editor = ClassicEditor;
  public editorInstance: any;
  
  quizForm: FormGroup;
  categories = [];

  constructor(
    private fb: FormBuilder,
    private _cat: CategoryService,
    private _snack: MatSnackBar,
    private _quiz: QuizService
  ) {
    this.quizForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      maxMarks: ['', Validators.required],
      numberOfQuestions: ['', Validators.required],
      active: [true],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'Error in loading data from server', 'error');
      }
    );
  }

  addQuiz() {
    if (this.quizForm.invalid) {
      this._snack.open('Please fill all required fields', '', {
        duration: 3000,
      });
      return;
    }

    const quizData = this.quizForm.value;

    this._quiz.addQuiz(quizData).subscribe(
      (data) => {
        Swal.fire('Success', 'Quiz is added', 'success');
        this.quizForm.reset({
          active: true // Reset active field to true
        });
      },
      (error) => {
        Swal.fire('Error!!', 'Error while adding quiz', 'error');
        console.log(error);
      }
    );
  }

  onEditorReady(event: any) {
    this.editorInstance = event.editor;
    console.log('CKEditor is ready:', this.editorInstance);
  }
}
