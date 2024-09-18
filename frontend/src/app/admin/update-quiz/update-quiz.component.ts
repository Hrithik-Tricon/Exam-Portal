import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';
import { QuizService } from '../../services/quiz.service';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Category } from '../../services/category.model'; // Import Category model
import { Quiz } from '../../services/quiz'; // Import Quiz model

@Component({
  selector: 'app-update-quiz',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    CKEditorModule  
  ],
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.scss']
})
export class UpdateQuizComponent implements OnInit {
  qId: number = 0;
  quiz: Quiz = {
    id: 0,
    title: '',
    description: '',
    
    // Ensure property names match
    active: true,
    category: {
      id: 0,
      title: '',
      description: ''
    }
  };

  categories: Category[] = []; 

  constructor(
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private _cat: CategoryService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];

    this._quiz.getQuiz(this.qId).subscribe(
      (data: Quiz) => {
        this.quiz = data;
      },
      (error) => {
        console.log(error);
      }
    );

    this._cat.categories().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error) => {
        alert('Error in loading categories');
      }
    );
  }

  public updateData() {
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data: Quiz) => {
        Swal.fire('Success !!', 'Quiz updated successfully', 'success').then(() => {
          this._router.navigate(['/admin/quizzes']);
        });
      },
      (error) => {
        Swal.fire('Error', 'Error in updating quiz', 'error');
        console.log(error);
      }
    );
  }
}
