import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Student } from '../../interfaces/student';
import { Person } from '../../interfaces/person';
import { StudentService } from '../../services/student.service';
import { Staff } from '../../interfaces/staff';
import { StaffService } from '../../services/staff.service';
import { TeacherService } from '../../services/teacher.service';
import { Assignment } from '../../interfaces/assginment';
import { AssignmentService } from '../../services/assignment.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Teacher } from '../../interfaces/teacher';
import { CourseScheduleService } from '../../services/courseSchedule.service';
import { catchError, of, switchMap, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { CourseSchedule } from '../../interfaces/courseSchedule';
import { Course } from '../../interfaces/course';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  option: string = '0'
  userForm = new FormGroup({
    id: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    secondName: new FormControl(''),
    lastName1: new FormControl('', Validators.required),
    lastName2: new FormControl(''),
    selectedRol: new FormControl('')
  });
  userForm2 = new FormGroup({
    id: new FormControl('', Validators.required),
  });
  selectedRol: string = ''

  assignmentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    semester: new FormControl('', Validators.required)
  });

  assignmentForm2 = new FormGroup({
    asId: new FormControl('', Validators.required),
  })

  courseScheduleForm = new FormGroup({
    teacherId: new FormControl('', Validators.required),
    asId: new FormControl('', Validators.required),

    monday: new FormControl(false),
    tuesday: new FormControl(false),
    wednesday: new FormControl(false),
    thursday: new FormControl(false),
    friday: new FormControl(false),

    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    room: new FormControl('', Validators.required),
  }, { validators: this.maxSelectedDaysValidator(3) });

  getDaysControls(formGroup: FormGroup): AbstractControl[] {
    const controls = [
      formGroup.get('monday'),
      formGroup.get('tuesday'),
      formGroup.get('wednesday'),
      formGroup.get('thursday'),
      formGroup.get('friday')
    ];

    return controls.filter(control => control !== null && control !== undefined) as AbstractControl[];
  }

  maxSelectedDaysValidator(max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const formGroup = control as FormGroup;
      const selectedDays = this.getDaysControls(formGroup).filter(control => control.value).length;
      return selectedDays <= max ? null : { maxSelected: true };
    };
  }

  scheduleConsultForm = new FormGroup({
    courseId: new FormControl('', Validators.required)
  });

  scheduleFound: any = {};


  constructor(private router: Router, private _studentServices: StudentService, private _staffService: StaffService,
    private _teacherService: TeacherService, private _assignmentService: AssignmentService, private _scheduleService: CourseScheduleService) {


  }
  ngOnInit() {
    if (!localStorage.getItem('pageReloaded')) {
      localStorage.setItem('pageReloaded', 'true');
      location.reload();
    }
  }
  saveUser() {
    if (this.userForm.valid) {
      const selectedRole = this.userForm.value.selectedRol
      const name = this.userForm.value.firstName!
      const lastName1 = this.userForm.value.lastName1!
      const lastName2 = this.userForm.value.lastName2!
      const code = '82212'

      if (selectedRole === 'student') {
        const student: Person = {
          id: this.userForm.value.id!,
          firstName: this.userForm.value.firstName!,
          secondName: this.userForm.value.secondName!,
          lastName1: this.userForm.value.lastName1!,
          lastName2: this.userForm.value.lastName2!,
          email: name + lastName1 + lastName2 + code + 'student@worlduniversity.com',
          password: name.toUpperCase() + '@Wu1',
        }
        console.log(student)
        this._studentServices.createStudent(student).subscribe(data => {
          Swal.fire({
            title: 'Student Created Successfully',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })
          this.userForm.reset()
        })


      } if (selectedRole === 'staff') {

        const staff: Person = {
          id: this.userForm.value.id!,
          firstName: this.userForm.value.firstName!,
          secondName: this.userForm.value.secondName!,
          lastName1: this.userForm.value.lastName1!,
          lastName2: this.userForm.value.lastName2!,
          email: name + lastName1 + lastName2 + 'staff@worlduniversity.com',
          password: name.toUpperCase() + '@Wu1',
        }
        console.log(staff)
        this._staffService.createStaff(staff).subscribe(data => {
          Swal.fire({
            title: 'Staff Created Successfully',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })
          this.userForm.reset()
        })
      } if (selectedRole === 'teacher') {

        const teacher: Person = {
          id: this.userForm.value.id!,
          firstName: this.userForm.value.firstName!,
          secondName: this.userForm.value.secondName!,
          lastName1: this.userForm.value.lastName1!,
          lastName2: this.userForm.value.lastName2!,
          email: name + lastName1 + lastName2 + 'teacher@worlduniversity.com',
          password: name.toUpperCase() + '@Wu1',
        }
        console.log(teacher)
        this._teacherService.createTeacher(teacher).subscribe(data => {
          Swal.fire({
            title: 'Teacher Created Successfully',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })
          this.userForm.reset()
        })
      }


    }

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
          this.option = '3';
          // console.log(this.userFound, this.profile);
        }
      });
    }
  }
  deleteUser() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then((result) => {
        if (result.isConfirmed) {
          const id = this.userForm2.value.id!;

          if (this.userForm2.valid) {

            this._studentServices.deleteStudent(id).subscribe(
              () => {
                Swal.fire({
                  title: 'Student deleted Successfully',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1500
                })
                this.userForm2.reset();
              },
              (studentError) => {
                console.log('Not a student, trying teacher...');


                this._teacherService.deleteTeacher(id).subscribe(
                  () => {
                    Swal.fire({
                      title: 'Teacher deleted Successfully',
                      icon: 'success',
                      showConfirmButton: false,
                      timer: 1500
                    })
                    this.userForm2.reset();
                  },
                  (teacherError) => {
                    console.log('Not a teacher, trying staff...');


                    this._staffService.deleteStaff(id).subscribe(
                      () => {
                        Swal.fire({
                          title: 'Staff deleted Successfully',
                          icon: 'success',
                          showConfirmButton: false,
                          timer: 1500
                        })
                        this.userForm2.reset();
                      },
                      (staffError) => {
                        console.log('User not found in any role');
                        Swal.fire({
                          title: 'user not found',
                          icon: 'error',
                          showConfirmButton: false,
                          timer: 1500
                        })
                      }
                    );
                  }
                );
              }
            );
          } else {
            alert('Invalid form data');
          }

        }
      })

  }
  saveAssignment() {
    alert('enter to the assignment')
    if (this.assignmentForm.valid) {
      alert('Creating Assignment...')
      const assignment: Assignment = {
        name: this.assignmentForm.value.name!,
        semester: this.assignmentForm.value.semester!
      }
      console.log(assignment)
      this._assignmentService.createAssignment(assignment).subscribe(data => {
        alert('assignment created')
        this.assignmentForm.reset()
      })

    }
  }


  consultAssignment() {
    const asId = this.assignmentForm2.value.asId!;
    alert('Assignment')
    if (this.assignmentForm2.valid) {
      alert('Getting Assignment...')
      this._assignmentService.getAssignment(asId).subscribe({
        next: (data) => {
          this.assignmentFound = data
          this.option = '3'
          console.log(this.assignmentFound)
        },
        error: (error: HttpErrorResponse) => {
          alert('Assignment not found')
          this.assignmentFound = {}
        }

      })
    }
  }
  deleteAssignment() {
    const asId = this.assignmentForm2.value.asId!; // Obtener el ID de la asignación

    if (this.assignmentForm2.valid) {
      alert('Deleting Assignment...');
      this._assignmentService.deleteAssignment(asId).subscribe({
        next: (response) => {
          alert('Assignment deleted successfully');
          this.assignmentFound = {};
          this.assignmentForm2.reset();
          this.option = '0';
        },
        error: (error: HttpErrorResponse) => {

          console.error('Error deleting assignment:', error);
          alert('Error deleting assignment. Assignment not found or already deleted.');
        }
      });
    } else {
      alert('Invalid form data');
    }
  }

  saveCourseSchedule() {
    if (this.courseScheduleForm.valid) {


      const courseSchedule: CourseSchedule = {
        courseData: {
          teacherId: Number(this.courseScheduleForm.value.teacherId!),
          asId: Number(this.courseScheduleForm.value.asId!)
        },

        scheduleData: this.getDays()


      }
      console.log(courseSchedule)
      this._scheduleService.createCourseSchedule(courseSchedule).subscribe(data => {
        alert('Course Schedule created')
        this.courseScheduleForm.reset()
      })


    }
  }
  getDays() {
    const scheduleData = []
    if (this.courseScheduleForm.value.monday) {
      scheduleData.push({
        day: 'Monday',
        startTime: this.courseScheduleForm.value.startTime!,
        endTime: this.courseScheduleForm.value.endTime!,
        room: this.courseScheduleForm.value.room!
      })
    }


    if (this.courseScheduleForm.value.tuesday) {
      scheduleData.push({
        day: 'Tuesday',
        startTime: this.courseScheduleForm.value.startTime!,
        endTime: this.courseScheduleForm.value.endTime!,
        room: this.courseScheduleForm.value.room!
      })
    }

    if (this.courseScheduleForm.value.wednesday) {
      scheduleData.push({
        day: 'wednesday',
        startTime: this.courseScheduleForm.value.startTime!,
        endTime: this.courseScheduleForm.value.endTime!,
        room: this.courseScheduleForm.value.room!
      })
    }

    if (this.courseScheduleForm.value.thursday) {
      scheduleData.push({
        day: 'Thursday',
        startTime: this.courseScheduleForm.value.startTime!,
        endTime: this.courseScheduleForm.value.endTime!,
        room: this.courseScheduleForm.value.room!
      })
    }

    if (this.courseScheduleForm.value.friday) {
      scheduleData.push({
        day: 'Friday',
        startTime: this.courseScheduleForm.value.startTime!,
        endTime: this.courseScheduleForm.value.endTime!,
        room: this.courseScheduleForm.value.room!
      })
    }
    return scheduleData

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





}
