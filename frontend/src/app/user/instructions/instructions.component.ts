import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../services/quiz';  // Import the Quiz interface

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit {
  qid: number = 0; 
  quiz: Quiz = { id: 0, title: '' }; // Use the imported interface

  constructor(
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const qidParam = this._route.snapshot.params['qid']; 
    this.qid = Number(qidParam);
    console.log(this.qid);

    this._quiz.getQuiz(this.qid).subscribe(
      (data: Quiz) => {
        this.quiz = data;
        console.log(this.quiz);
      },
      (error) => {
        console.log(error);
        alert('Error in loading quiz data');
      }
    );
  }

  startQuiz() {
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showCancelButton: true,
      confirmButtonText: `Start`,
      denyButtonText: `Don't save`,
      icon: 'info',
    }).then((result) => {
      if (result.isConfirmed) {
        this._router.navigate(['/start/' + this.qid]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
