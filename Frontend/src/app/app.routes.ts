import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { StaffComponent } from './pages/staff/staff.component';

export const routes: Routes = [{    
    path: '',
    component: HomeComponent,
    title: 'Home World University'
},{    
    path: 'administrator',
    component: AdminComponent,
    title: 'Admin World University'
},{    
    path: 'staff',
    component: StaffComponent,
    title: 'Staff World University'
},{    
    path: 'login',
    component: LoginComponent,
    title: 'login World University'
}];

