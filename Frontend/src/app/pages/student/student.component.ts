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
  option: string = '0'
  constructor(private router: Router) {

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
