import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  rol: string = localStorage.getItem('rol') || '';
  route: string = "/" + this.rol;

  constructor(private router: Router) {


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
