import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Runner } from '../interfaces/runners.interface.ts';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  public baseUrl = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getRunners(): Observable<Runner[]>{
    return this.http.get<Runner[]>(`${this.baseUrl}/runners`);
  }


  delRunner(id: number): Observable<boolean>{
      return this.http.delete(`${this.baseUrl}/runners/${id}`)
      .pipe(
        catchError(err => of(false)),
        map( resp => true)
      );
  }


  addRunner(runner: Runner): Observable<Runner>{
    return this.http.post<Runner>(`${this.baseUrl}/runners`, runner)
  }

  updateRunner(runner: Runner, id:number): Observable<Runner>{
    return this.http.patch<Runner>(`${this.baseUrl}/runners/${id}`, runner)
  }


}

