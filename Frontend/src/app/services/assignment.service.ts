import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assignment } from '../interfaces/assginment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private myAppUrl: string
  private myApiUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/'
    this.myApiUrl = 'api/assignment'
  }

  createAssignment(assginment: Assignment): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, assginment)
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
  getAssignment(asId: string): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.myAppUrl}${this.myApiUrl}/${asId}`)
  }
  deleteAssignment(asId: string): Observable<any> {
    return this.http.delete<any>(`${this.myAppUrl}${this.myApiUrl}/${asId}`)
  }
}
