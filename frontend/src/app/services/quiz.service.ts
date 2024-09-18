import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private _http: HttpClient) {}

  public quizzes(): Observable<Quiz[]> {
    return this._http.get<Quiz[]>(`${baseUrl}/quiz/`);
  }

  public addQuiz(quiz: Quiz): Observable<Quiz> {
    return this._http.post<Quiz>(`${baseUrl}/quiz/`, quiz);
  }

  public deleteQuiz(qId: number): Observable<void> {
    return this._http.delete<void>(`${baseUrl}/quiz/${qId}`);
  }

  public getQuiz(qId: number): Observable<Quiz> {
    return this._http.get<Quiz>(`${baseUrl}/quiz/${qId}`);
  }

  public updateQuiz(quiz: Quiz): Observable<Quiz> {
    return this._http.put<Quiz>(`${baseUrl}/quiz/`, quiz);
  }

  public getQuizzesOfCategory(cid: number): Observable<Quiz[]> {
    return this._http.get<Quiz[]>(`${baseUrl}/quiz/category/${cid}`);
  }

  public getActiveQuizzes(): Observable<Quiz[]> {
    return this._http.get<Quiz[]>(`${baseUrl}/quiz/active`);
  }

  public getActiveQuizzesOfCategory(cid: number): Observable<Quiz[]> {
    return this._http.get<Quiz[]>(`${baseUrl}/quiz/category/active/${cid}`);
  }
}
