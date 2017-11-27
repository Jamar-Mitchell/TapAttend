import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage} from '../pages/home/home';
import { SignInPage} from '../pages/signIn/signIn';
import { CoursePage} from '../pages/course/course';
import { AttendancePage} from '../pages/attendance/attendance';

export const router: Routes = [
     {path: '', redirectTo: 'home', pathMatch: 'full'}, 
     {path: 'home', component: HomePage},
     {path: 'course', component: CoursePage},
     {path: 'attendance', component:AttendancePage}, 
     {path: 'signIn', component:SignInPage} 
     

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);