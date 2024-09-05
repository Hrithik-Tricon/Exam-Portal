import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';
import { QuizService } from '../../services/quiz.service';

// Correct interface syntax
interface Quiz {
  id: number;
  title: string;
  description: string;
  maxMarks: string;
  numberOfQuestions: string;
  active: boolean;
  category: Category;
}

interface Category {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css'],
})
export class UpdateQuizComponent implements OnInit {
  qId = 0;
  quiz: Quiz = {
    id: 0,
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      id: 0,
      title: '',
      description: ''
    }
  }; // Initialize with default values

  categories: Category[] = []; // Initialize as an empty array

  constructor(
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private _cat: CategoryService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid']; // Get route param
    this._quiz.getQuiz(this.qId).subscribe(
      (data: Quiz) => {
        this.quiz = data; // Assign data to quiz
        console.log(this.quiz);
      },
      (error) => {
        console.log(error);
      }
    );

    this._cat.categories().subscribe(
      (data: Category[]) => {
        this.categories = data; // Assign categories
      },
      (error) => {
        alert('Error in loading categories');
      }
    );
  }

  // Update form submit
  public updateData() {
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data) => {
        Swal.fire('Success !!', 'Quiz updated successfully', 'success').then((e) => {
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
