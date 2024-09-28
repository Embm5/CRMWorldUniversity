import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Student } from '../../interfaces/student';
import { Person } from '../../interfaces/person';
import { StudentService } from '../../services/student.service';
import { Staff } from '../../interfaces/staff';
import { StaffService } from '../../services/staff.service';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink , FormsModule , ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  userForm = new FormGroup({
    id: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    secondName: new FormControl(''),
    lastName1: new FormControl('',Validators.required),
    lastName2: new FormControl(''),
    selectedRol: new FormControl('')
  });
  selectedRol: string = ''
  constructor(private router: Router, private _studentServices: StudentService , private _staffService: StaffService){

   
  }
  ngOnInit() {
    if(!localStorage.getItem('pageReloaded')){
      localStorage.setItem('pageReloaded', 'true');
      location.reload();
    }
  }
  saveUser(){
    if(this.userForm.valid ){
      const selectedRole = this.userForm.value.selectedRol
      alert('Selected Role: ' + selectedRole);
      const name = this.userForm.value.firstName!+this.userForm.value.lastName1!
      if( selectedRole === 'student'){ 
        alert('its a student')
        const student: Person = {
          id: this.userForm.value.id!,
          firstName: this.userForm.value.firstName!,
          secondName: this.userForm.value.secondName!,
          lastName1: this.userForm.value.lastName1!,
          lastName2: this.userForm.value.lastName2!,
          email: name +'@worlduniversity.com',
          password:  name.toUpperCase()+'@Wu1',
         }
         console.log(student) 
         this._studentServices.createStudent(student).subscribe(data => {
           alert('Student Created Successfully')
           this.userForm.reset()
         })
      }if(selectedRole === 'staff'){
        alert('its a staff')
        const staff: Person = {
          id: this.userForm.value.id!,
          firstName: this.userForm.value.firstName!,
          secondName: this.userForm.value.secondName!,
          lastName1: this.userForm.value.lastName1!,
          lastName2: this.userForm.value.lastName2!,
          email: name +'@worlduniversity.com',
          password:  name.toUpperCase()+'@Wu1',
         }
         console.log(staff) 
         this._staffService.createStaff(staff).subscribe(data => {
           alert('Staff Created Successfully')
           this.userForm.reset()
         })
      }
       
    } 

  }
  reload(){
    localStorage.removeItem('pageReloaded');
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('pageReloaded');
    this.router.navigate(['']);  
  } 
  


}
