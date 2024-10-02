import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnrollCourse } from '../interfaces/enrollCourse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class enrollCourseService {
  private myAppUrl: string
  private myApiUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/'
    this.myApiUrl = 'api/Staff'
  }
  getAllEnrollCourses(): Observable<EnrollCourse[]> {
    return this.http.get<EnrollCourse[]>(this.myApiUrl);
  }
  createEnrollCourses(studentId: number, courses: number[]): Observable<EnrollCourse[]> {
    const body = { studentId, courses };
    return this.http.post<EnrollCourse[]>(this.myApiUrl, body);
  }


  getEnrolledCoursesWithSchedule(studentId: number): Observable<EnrollCourse[]> {
    const url = `${this.myApiUrl}/${studentId}`;
    return this.http.get<EnrollCourse[]>(url);
  }


  updateEnrollCourse(studentId: number, courseId: number, enrollCourse: Partial<EnrollCourse>): Observable<EnrollCourse> {
    const url = `${this.myApiUrl}/${studentId}/${courseId}`;
    return this.http.patch<EnrollCourse>(url, enrollCourse);
  }


  deleteEnrollCourse(studentId: number, courseId: number): Observable<void> {
    const url = `${this.myApiUrl}/${studentId}/${courseId}`;
    return this.http.delete<void>(url);
  }
  setAllEnrollsInactive(): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}/inactivateAll`;
    return this.http.put<any>(url, {});
  }






}
