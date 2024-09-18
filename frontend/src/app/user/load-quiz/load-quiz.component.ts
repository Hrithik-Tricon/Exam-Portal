import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.scss'],
})
export class LoadQuizComponent implements OnInit {
  catId: number = 0; // Change to number type
  quizzes: any[] = []; // Define quizzes as an array of any type

  constructor(private _route: ActivatedRoute, private _quiz: QuizService) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.catId = Number(params['catId']); // Convert to number
      if (this.catId === 0) {
        console.log('Load all the quiz');

        this._quiz.getActiveQuizzes().subscribe(
          (data: any) => {
            this.quizzes = data; // Assuming 'data' is an array
            console.log(this.quizzes);
          },
          (error) => {
            console.log(error);
            alert('Error in loading all quizzes');
          }
        );
      } else {
        console.log('Load specific quiz');

        this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
          (data: any) => {
            this.quizzes = data; // Assuming 'data' is an array
            console.log(this.quizzes);
          },
          (error) => {
            console.log(error);
            alert('Error in loading quiz data');
          }
        );
      }
    });
  }
}
