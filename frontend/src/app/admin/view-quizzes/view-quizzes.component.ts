import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../services/quiz'; // Import the Quiz interface

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.scss'],
})
export class ViewQuizzesComponent implements OnInit {
  quizzes: Quiz[] = []; // Use the Quiz interface here

  constructor(private _quiz: QuizService) {}

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data: Quiz[]) => { // Ensure the type matches
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

  deleteQuiz(qId: number): void {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._quiz.deleteQuiz(qId).subscribe(
          () => {
            // Ensure that the quiz ID is valid before filtering
            if (qId !== undefined) {
              this.quizzes = this.quizzes.filter((quiz) => quiz.id !== qId);
            }
            Swal.fire('Success', 'Quiz deleted', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error');
          }
        );
      }
    });
  }
}
