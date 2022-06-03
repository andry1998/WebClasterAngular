import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { AppRoutingModule } from './app-routing.module';
import { CreatePersonComponent } from './create-person/create-person.component';
import {FormsModule} from '@angular/forms';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import {HttpInterceptorService} from './httpInterceptor.service';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    CreatePersonComponent,
    UpdatePersonComponent,
    SigninComponent,
    HomeComponent,
    StudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
