import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [RouterLink ,FormsModule, ReactiveFormsModule],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
  constructor(private router: Router) { 

  }
  ngOnInit() {
    if(!localStorage.getItem('pageReloaded')){
      localStorage.setItem('pageReloaded', 'true');
      location.reload();
    }

  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('pageReloaded');
    this.router.navigate(['']);  
  } 
  reload(){
    localStorage.removeItem('pageReloaded');
  }
  
}
