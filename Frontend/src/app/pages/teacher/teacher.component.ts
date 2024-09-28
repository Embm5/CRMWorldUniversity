import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
  constructor(private router: Router ){

}
ngOnInit() {
  if(!localStorage.getItem('pageReloaded')){
    localStorage.setItem('pageReloaded', 'true');
    location.reload();
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
