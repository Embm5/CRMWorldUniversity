import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private myAppUrl: string
  private myApiUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/'
    this.myApiUrl = 'api/student'
}
createStudent(student: Person): Observable<any>{
  return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, student)
}

getStudents(): Observable<Student[]>{
  return this.http.get<Student[]>(`${this.myAppUrl}${this.myApiUrl}`)
}
getStudent(id:string): Observable<Student>{
  return this.http.get<Student>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
}
deleteStudent(id:string): Observable<any>{
  return this.http.delete<any>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
}
}
