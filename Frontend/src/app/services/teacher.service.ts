import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';
import { Teacher } from '../interfaces/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private myAppUrl: string
  private myApiUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/'
    this.myApiUrl = 'api/teacher'
}
createTeacher(teacher: Person): Observable<any>{
  return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, teacher)
}

getTeachers(): Observable<Teacher[]>{
  return this.http.get<Teacher[]>(`${this.myAppUrl}${this.myApiUrl}`)
}
getTeacher(id:string): Observable<Teacher>{
  return this.http.get<Teacher>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
}
deleteTeacher(id:string): Observable<any>{
  return this.http.delete<any>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
}

}
