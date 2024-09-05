import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  qId: number = 0; // Initialized with 0
  qTitle: string = ''; // Initialized with an empty string
  question = {
    quiz: {
      qId: 0, // Initial default value for qId
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };


  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService
  ) {}

  ngOnInit(): void {
    // Get qId and qTitle from the route parameters
    this.qId = Number(this._route.snapshot.params['qid']); // Explicit type casting to number
    this.qTitle = this._route.snapshot.params['title'];

    // Assign qId to the question object
    this.question.quiz.qId = this.qId;
  }

  formSubmit() {
    if (this.question.content.trim() === '' || this.question.content == null) {
      return;
    }

    if (this.question.option1.trim() === '' || this.question.option1 == null) {
      return;
    }
    if (this.question.option2.trim() === '' || this.question.option2 == null) {
      return;
    }
    if (this.question.answer.trim() === '' || this.question.answer == null) {
      return;
    }

    // Submit form
    this._question.addQuestion(this.question).subscribe(
      (data: any) => {
        Swal.fire('Success ', 'Question Added. Add Another one', 'success');
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
      },
      (error) => {
        Swal.fire('Error', 'Error in adding question', 'error');
      }
    );
  }
}
