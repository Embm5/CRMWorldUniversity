import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CourseScheduleService } from '../../services/courseSchedule.service';
import { jwtDecode, JwtPayload } from "jwt-decode";

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {

  schedule: any = []
  courseSchedules: any = []

  constructor(private router: Router, private _courseSchedule: CourseScheduleService) {

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
    localStorage.removeItem('pageReloaded');
    this.router.navigate(['']);
  }

  getSchedule() {
    const token = localStorage.getItem('token')!
    const decoded: any = jwtDecode<JwtPayload>(token);
    const teacherId = decoded.id
    this._courseSchedule.getCoursesByTeacher(teacherId).subscribe(data => {
      this.schedule = data
      console.log(this.schedule)
    })
  }
}
