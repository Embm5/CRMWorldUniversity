import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { enrollCourseService } from '../../services/enrollCourse.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseScheduleService } from '../../services/courseSchedule.service';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  option: string = '0'
  schedule: any = []
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

}
