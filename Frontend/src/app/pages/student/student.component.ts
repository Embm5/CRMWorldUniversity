import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(private router: Router){
    
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.router.navigate(['']);  
  } 
}
