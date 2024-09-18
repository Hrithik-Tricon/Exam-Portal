import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Question } from '../../services/question';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [CKEditorModule, ReactiveFormsModule],
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  public editorInstance: any; // Use `any` here for the editor instance
  qId: number = 0;
  qTitle: string = '';
  questionForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private fb: FormBuilder
  ) {
    this.questionForm = this.fb.group({
      content: ['', Validators.required],
      options: this.fb.array(['', '', '', ''], Validators.required),
      answer: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.qId = Number(this._route.snapshot.params['qid']);
    this.qTitle = this._route.snapshot.params['title'];
  }

  formSubmit() {
    if (this.questionForm.invalid) {
      Swal.fire('Error', 'Please fill out all required fields', 'error');
      return;
    }

    const formValue = this.questionForm.value;
    const question: Question = {
      quiz: {
        qId: this.qId,
      },
      content: formValue.content,
      options: formValue.options,
      answer: formValue.answer,
    };

    this._question.addQuestion(question).subscribe(
      (data: any) => {
        Swal.fire('Success', 'Question Added. Add Another one', 'success');
        this.questionForm.reset();
      },
      (error) => Swal.fire('Error', 'Error in adding question', 'error')
    );
  }

  onEditorReady(event: any) {
    this.editorInstance = event.editor;
  }
}
