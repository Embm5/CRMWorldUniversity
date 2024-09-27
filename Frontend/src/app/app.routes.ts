import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { StaffComponent } from './pages/staff/staff.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';

export const routes: Routes = [{    
    path: '',
    component: HomeComponent,
    title: 'Home World University'
},{    
    path: 'administrator',
    component: AdminComponent,
    title: 'Admin World University'
},{
    path: 'student',
    component: StudentComponent,
    title: 'Student   World University'

},{
    path: 'teacher',
    component: TeacherComponent,
    title: 'Teacher World University' 

},{    
    path: 'staff',
    component: StaffComponent,
    title: 'Staff World University'
},{    
    path: 'login',
    component: LoginComponent,
    title: 'login World University'
}];

