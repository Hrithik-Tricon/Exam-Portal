import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionService } from '../../services/question.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  // Explicitly defining the types
  qid: string = ''; // 'qid' will be a string
  questions: any[] = []; // 'questions' will be an array of any type

  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;

  isSubmit = false;

  timer: number | undefined;

  constructor(
    private locationSt: LocationStrategy,
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _quiz: QuizService
  ) {}

  ngOnInit(): void {
    this.preventBackButton();
    // this.qid = this._route.snapshot.params.qid; // Expecting 'qid' to be a string
    this.qid = this._route.snapshot.params['qid'];
    console.log(this.qid);
    this.loadQuestions();
  }

  loadQuestions() {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data: any) => {
        this.questions = data; // Assuming 'data' is an array

        this.timer = this.questions.length * 2 * 60; // Timer is set based on questions length

        console.log(this.questions);
        this.startTimer();
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error in loading questions of quiz', 'error');
      }
    );
  }

  preventBackButton() {
    history.pushState(null, '', location.href); // Pass an empty string '' instead of null
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href); // Pass an empty string '' instead of null
    });
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to submit the quiz?',
      showCancelButton: true,
      confirmButtonText: `Submit`,
      icon: 'info',
    }).then((e) => {
      if (e.isConfirmed) {
        this.evalQuiz();
      }
    });
  }

  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer && this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else if (this.timer) {
        this.timer--;
      }
    }, 1000);
  }

  getFormattedTime() {
    const mm = Math.floor(this.timer! / 60);
    const ss = this.timer! - mm * 60;
    return `${mm} min : ${ss} sec`;
  }

  evalQuiz() {
    // Perform evaluation logic here
    this._question.evalQuiz(this.questions).subscribe(
      (data: any) => {
        console.log(data);
        this.marksGot = data.marksGot;
        this.correctAnswers = data.correctAnswers;
        this.attempted = data.attempted;
        this.isSubmit = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
