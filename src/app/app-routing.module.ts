import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {CreatePersonComponent} from './create-person/create-person.component';
import {UpdatePersonComponent} from './update-person/update-person.component';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component';
import {StudentComponent} from './student/student.component';
import {CreateStudentComponent} from './create-student/create-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';


const routes: Routes = [
  {path: 'persons', component: PersonComponent},
  {path: 'students', component: StudentComponent},
  {path: 'create-person', component: CreatePersonComponent},
  {path: 'update-person/:id', component: UpdatePersonComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth/login', component: SigninComponent },
  //{path: '', redirectTo: 'persons', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
