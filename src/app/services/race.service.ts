import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Runner } from '../interfaces/runners.interface.ts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  public baseUrl = 'http://localhost:3000';

  // public httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   }),
  // };

  constructor( private http: HttpClient ) { }


  getRunners(): Observable<Runner[]>{
    return this.http.get<Runner[]>(`${this.baseUrl}/runners`);
  }

  delRunner(id: number): Observable<Runner>{
    return this.http.delete<Runner>(`${this.baseUrl}/runners/${id}`);
  }

  addRunner(runner: Runner): Observable<Runner>{
    // return this.http.post<Runner>(`${this.baseUrl}/runners`, runner, this.httpOptions)
    return this.http.post<Runner>(`${this.baseUrl}/runners`, runner)

  }

  updateRunner(runner: Runner): Observable<Runner>{
    return this.http.put<Runner>(`${this.baseUrl}/runners`, runner)
  }


}

