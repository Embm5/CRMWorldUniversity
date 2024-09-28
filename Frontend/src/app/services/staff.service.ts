import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';
import { Staff } from '../interfaces/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private myAppUrl: string
  private myApiUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/'
    this.myApiUrl = 'api/Staff'
}
createStaff(staff: Person): Observable<any>{
  return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}`, staff)
}

getStaffs(): Observable<Staff[]>{
  return this.http.get<Staff[]>(`${this.myAppUrl}${this.myApiUrl}`)
}
getStaff(id:string): Observable<Staff>{
  return this.http.get<Staff>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
}
deleteStaff(id:string): Observable<any>{
  return this.http.delete<any>(`${this.myAppUrl}${this.myApiUrl}/${id}`)
}
}
