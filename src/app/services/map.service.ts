import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from '../interfaces/map.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public baseUrl = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getPositions(): Observable<Position[]>{
    return this.http.get<Position[]>(`${this.baseUrl}/map`);
  }

}
