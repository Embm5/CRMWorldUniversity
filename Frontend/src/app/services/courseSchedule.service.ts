import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course';
import { CourseSchedule } from '../interfaces/courseSchedule';

@Injectable({
    providedIn: 'root'
})
export class CourseScheduleService {
    private apiUrl = 'http://localhost:3000/api/courseSchedule'; // Ajusta la URL según tu backend

    constructor(private http: HttpClient) { }


    getAllCourseSchedules(): Observable<CourseSchedule[]> {
        return this.http.get<CourseSchedule[]>(this.apiUrl);
    }


    createCourseSchedule(courseSchedule: CourseSchedule): Observable<CourseSchedule> {
        return this.http.post<CourseSchedule>(this.apiUrl, courseSchedule);
    }

    getCourseSchedule(courseId: number): Observable<CourseSchedule> {
        const url = `${this.apiUrl}/${courseId}`;
        return this.http.get<CourseSchedule>(url);
    }


    getCoursesByAssignment(asId: number): Observable<Course[]> {
        const url = `${this.apiUrl}/assignment/${asId}`;
        return this.http.get<Course[]>(url);
    }


    getCoursesByTeacher(teacherId: number): Observable<Course[]> {
        const url = `${this.apiUrl}/teacher/${teacherId}`;
        return this.http.get<Course[]>(url);
    }


    updateCourseSchedule(courseId: number, courseSchedule: CourseSchedule): Observable<CourseSchedule> {
        const url = `${this.apiUrl}/${courseId}`;
        return this.http.put<CourseSchedule>(url, courseSchedule);
    }


    deleteCourseSchedule(courseId: number): Observable<void> {
        const url = `${this.apiUrl}/${courseId}`;
        return this.http.delete<void>(url);
    }
}