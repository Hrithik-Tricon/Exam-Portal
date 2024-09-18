// start.component.ts
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../services/question'; // Import the Question interface

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  qid: number = 0;
  questions: Question[] = [];

  marksGot: number = 0;
  correctAnswers: number = 0;
  attempted: number = 0;

  isSubmit: boolean = false;
  timer: number = 0;

  constructor(
    private locationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService
  ) {}

  ngOnInit(): void {
    this.preventBackButton();
    this.qid = Number(this._route.snapshot.params['qid']);
    this.loadQuestions();
  }

  loadQuestions(): void {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data: Question[]) => {
        this.questions = data;
        this.timer = this.questions.length * 2 * 60;
        this.startTimer();
      },
      (error) => {
        console.error(error);
        Swal.fire('Error', 'Error in loading questions of quiz', 'error');
      }
    );
  }

  preventBackButton(): void {
    history.pushState(null, '', location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }

  submitQuiz(): void {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        this.evalQuiz();
      }
    });
  }

  startTimer(): void {
    const intervalId = setInterval(() => {
      if (this.timer <= 0) {
        clearInterval(intervalId);
        this.evalQuiz();
      } else {
        this.timer--;
      }
    }, 1000);
  }

  getFormattedTime(): string {
    const mm = Math.floor(this.timer / 60);
    const ss = this.timer % 60;
    return `${mm} min : ${ss} sec`;
  }

  evalQuiz(): void {
    this._question.evalQuiz(this.questions).subscribe(
      (data: any) => {
        this.marksGot = data.marksGot;
        this.correctAnswers = data.correctAnswers;
        this.attempted = data.attempted;
        this.isSubmit = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
