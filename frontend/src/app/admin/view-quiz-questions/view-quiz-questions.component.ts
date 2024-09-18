import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../services/question';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.scss'],
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId!: string; // Definite assignment assertion
  qTitle!: string; // Definite assignment assertion
  questions: Question[] = []; // Explicitly declare the type

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _snak: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid']; // Keep as string
    this.qTitle = this._route.snapshot.params['title']; // Keep as string
    
    // Convert qId to number for the service call
    const quizId = Number(this.qId);
    if (!isNaN(quizId)) {
      this._question.getQuestionsOfQuiz(quizId).subscribe(
        (data: Question[]) => {
          console.log(data);
          this.questions = data;
        },
        (error) => {
          console.log(error);
          this._snak.open('Error loading questions', '', { duration: 3000 });
        }
      );
    } else {
      this._snak.open('Invalid quiz ID', '', { duration: 3000 });
    }
  }

  // Add question handler
  addQuestion(): void {
    // Implement the functionality to add a question
  }

  // Update question handler
  updateQuestion(qid: number): void {
    // Implement the functionality to update a question
  }

  // Delete question handler
  deleteQuestion(qid: number): void {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure you want to delete this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        this._question.deleteQuestion(qid).subscribe(
          () => {
            this._snak.open('Question Deleted', '', { duration: 3000 });
            this.questions = this.questions.filter((q) => q.id !== qid);
          },
          (error) => {
            this._snak.open('Error deleting question', '', { duration: 3000 });
            console.log(error);
          }
        );
      }
    });
  }
}
