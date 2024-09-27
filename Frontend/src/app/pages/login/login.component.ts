import { Component } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { CredentialsService } from '../../services/credentials.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''
  password: string = ''
  constructor(private router: Router, private _credentialsService: CredentialsService){

  }
  login(){
    if (this.validateData()){
      this._credentialsService.login({email: this.email, password: this.password}).subscribe({
        next: (data) => {
          localStorage.setItem('token', data.token)
          localStorage.setItem('rol', data.rol)
          if (data.rol === 'administrator') {
          this.router.navigate(['/administrator'])
          }
        },
        error: (e:HttpErrorResponse) => {
          alert("Invalid credentials")
        }

      })
    }

  }
  validateData(){
    if(this.email === '' || this.password === ''){
      alert("Please fill in all fields!")
      return false
    }
    const validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 
    if (!validPassword.test(this.password)) {
       alert("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character!")
           return false
    }
    return true
  }


}
