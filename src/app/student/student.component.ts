import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];

  groups: String[];
  selected = "----";

  isSignedin = false;

  signedinUser = '';

  constructor(private studentService: StudentService, private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.studentService.getGroup().subscribe(data => {
        console.log(data);
        this.groups = data;
        console.log(this.groups);
      },
      error => console.log(error));
    this.isSignedin = this.authService.isUserSignedin();
    this.signedinUser = this.authService.getSignedinUser();
    this.getStudent();

    if (!this.authService.isUserSignedin()) {
      this.router.navigateByUrl('signin');
    }

    if (this.isSignedin) {
      this.studentService.getByUserRole();

    }

  }

  private getStudent(){
    this.studentService.getStudentList().subscribe((data: Student[]) => {
      console.log(data);
      this.students = data;
    });
  }

  createStudent(){
    this.router.navigate(['create-student']);
  }

  updateStudent(id: number){
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe( data => {
      console.log(data);
      this.getStudent();
    });
  }

  doSignout(): any{
    this.authService.signout();
  }

  update(e){
    this.selected = e.target.value;
  }

}
