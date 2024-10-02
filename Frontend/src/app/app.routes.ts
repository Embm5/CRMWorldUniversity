import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { StaffComponent } from './pages/staff/staff.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { adminGuard, loginGuard, staffGuard, studentGuard, teacherGuard } from './guards/login.guard';

export const routes: Routes = [{    
    path: '',
    component: HomeComponent,
    title: 'Home World University'
},{    
    path: 'administrator',
    component: AdminComponent,
    title: 'Admin World University',
    canActivate: [loginGuard , adminGuard]
    
},{
    path: 'student',
    component: StudentComponent,
    title: 'Student   World University',
    canActivate: [loginGuard , studentGuard]

},{
    path: 'teacher',
    component: TeacherComponent,
    title: 'Teacher World University',
    canActivate: [loginGuard,teacherGuard]

},{    
    path: 'staff',
    component: StaffComponent,
    title: 'Staff World University',
    canActivate: [loginGuard,staffGuard]

},{    
    path: 'login',
    component: LoginComponent,
    title: 'login World University'
}];

