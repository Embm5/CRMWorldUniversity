import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { enrollCourseService } from '../../services/enrollCourse.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseScheduleService } from '../../services/courseSchedule.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  option: string = '0'
  courses: any = []
  msg = {}

  constructor(private router: Router, private _enrollCourse: enrollCourseService, private _courseSchedule: CourseScheduleService) {

  }
  ngOnInit() {
    if (!localStorage.getItem('pageReloaded')) {
      localStorage.setItem('pageReloaded', 'true');
      location.reload();
    }
  }
  reload() {
    localStorage.removeItem('pageReloaded');
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.router.navigate(['']);
  }

  getCourses() {
    this.option = '0'
    this._courseSchedule.getAllCourseSchedules().subscribe(data => {
      this.courses = data
      this.selectedCourses = []

      const sortedCourses = this.courses.sort((a: any, b: any) => {
        const semesterA = parseInt(a.Assignment.semester, 10);
        const semesterB = parseInt(b.Assignment.semester, 10);
        return semesterA - semesterB;
      })
      console.log(sortedCourses)
    })
  }
  selectedCourses: any = []
  coursesIDs: number[] = []
  addCourse(courseId: number) {

    const selectedCourse = this.courses.find((course: any) => course.courseId === courseId)

    if (selectedCourse) {
      this.selectedCourses.push(selectedCourse);
      this.coursesIDs.push(courseId)
      this.courses = this.courses.filter((course: any) => course.courseId !== courseId)
      Swal.fire({
        title: 'Added',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000
      })
    }
    console.log(this.selectedCourses)
    console.log(this.coursesIDs)
  }

  summary() {
    if (this.selectedCourses.length === 0) {
      Swal.fire({
        title: 'Please select one course',
        icon: 'info',
        showConfirmButton: false,
        timer: 1000
      })
    } else {
      this.option = '1'
    }
  }

  saveEnroll() {
    const token = localStorage.getItem('token')!
    const decoded: any = jwtDecode<JwtPayload>(token);
    const studentId = decoded.id
    this._enrollCourse.createEnrollCourses(studentId, this.coursesIDs).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Enroll created succefully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.getCourses()
      },
      error: (e: HttpErrorResponse) => {
        Swal.fire({
          title: 'Error creating Enroll',
          icon: 'error',
          text: 'Already have an active enrollment',
          showConfirmButton: false,
          timer: 1000
        })
      }
    })

  }
}
