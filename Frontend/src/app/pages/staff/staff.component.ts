import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CourseScheduleService } from '../../services/courseSchedule.service';
import Swal from 'sweetalert2';
import { TeacherService } from '../../services/teacher.service';
import { StudentService } from '../../services/student.service';
import { StaffService } from '../../services/staff.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})

export class StaffComponent {
  option: string = '0'
  courseScheduleForm2 = new FormGroup({
    courseId: new FormControl('', Validators.required)
  });
  userForm2 = new FormGroup({
    id: new FormControl('', Validators.required),
  });


  constructor(private router: Router, private _scheduleService: CourseScheduleService, private _studentServices: StudentService, private _staffService: StaffService,
    private _teacherService: TeacherService) {

  }
  coureSchedules: any = []
  filteredCoureSchedules: any = []
  consultCourseSchedule() {

    if (this.courseScheduleForm2.valid) {

      const courseId = this.courseScheduleForm2.value.courseId!
      this._scheduleService.getAllCourseSchedules().subscribe({
        next: (data) => {
          this.coureSchedules = data;
          this.filteredCoureSchedules = this.filterByAssignmentName(this.coureSchedules, courseId);
          if (this.filteredCoureSchedules.length === 0) {
            Swal.fire({
              title: 'Course not found',
              icon: 'error',
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            this.option = '2'
            // console.log(this.filteredCoureSchedules)
          }
        }
      });
    }
  }
  filterByAssignmentName(coursesArray: any[], assignmentName: string): any[] {
    const filteredCourses = coursesArray.filter(course => course.Assignment.name === assignmentName);
    return filteredCourses.length > 0 ? filteredCourses : [];
  }

  userFound: any = {
  }
  profile: String = ''
  assignmentFound: any = {
  }
  consultUser() {
    const id = this.userForm2.value.id!;
    this.profile = '';

    if (this.userForm2.valid) {
      this._studentServices.getStudent(id).pipe(
        catchError((studentError) => {
          return this._teacherService.getTeacher(id).pipe(
            catchError((teacherError) => {
              return this._staffService.getStaff(id).pipe(
                catchError((staffError) => {
                  Swal.fire({
                    title: 'user not found',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  this.userFound = {};
                  return of(null);
                })
              ).pipe(
                tap(() => { this.profile = 'staff'; })
              );
            })
          ).pipe(
            tap(() => { this.profile = 'teacher'; })
          );
        })
      ).pipe(
        tap(() => { this.profile = 'student'; })
      ).subscribe((data) => {
        if (data) {
          this.userFound = data;
          this.option = '2';
          // console.log(this.userFound, this.profile);
        }
      });
    }
  }



  ngOnInit() {
    if (!localStorage.getItem('pageReloaded')) {
      localStorage.setItem('pageReloaded', 'true');
      location.reload();
    }

  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('pageReloaded');
    this.router.navigate(['']);
  }
  reload() {
    localStorage.removeItem('pageReloaded');
  }

}
