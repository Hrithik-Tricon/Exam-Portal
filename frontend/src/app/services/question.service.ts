// question.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Question } from './question';
// import { Question } from './question'; // Import the Question interface

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private _http: HttpClient) {}

  // Get all questions for a specific quiz
  public getQuestionsOfQuiz(qid: number): Observable<Question[]> {
    return this._http.get<Question[]>(`${baseUrl}/question/quiz/all/${qid}`);
  }

  // Get questions of quiz for test
  public getQuestionsOfQuizForTest(qid: number): Observable<Question[]> {
    return this._http.get<Question[]>(`${baseUrl}/question/quiz/${qid}`);
  }

  // Add a question
  public addQuestion(question: Question): Observable<Question> {
    return this._http.post<Question>(`${baseUrl}/question/`, question);
  }

  // Delete a question
  public deleteQuestion(questionId: number): Observable<void> {
    return this._http.delete<void>(`${baseUrl}/question/${questionId}`);
  }

  // Evaluate quiz
  public evalQuiz(questions: Question[]): Observable<any> {
    return this._http.post<any>(`${baseUrl}/question/eval-quiz`, questions);
  }
}
