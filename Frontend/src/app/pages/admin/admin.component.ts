import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  ngOnInit() {
    if(!localStorage.getItem('pageReloaded')){
      localStorage.setItem('pageReloaded', 'true');
      location.reload();
    }
  }
  reload(){
    localStorage.removeItem('pageReloaded');
  }
  constructor(private router: Router){
   
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('pageReloaded');
    this.router.navigate(['']);  
  } 

}
