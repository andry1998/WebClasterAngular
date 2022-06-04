import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {Router} from '@angular/router';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: '/app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  constructor(private studentService: StudentService, private router: Router) { }
  generatePass: String = "qqqqqqq";

  ngOnInit(): void {
    this.studentService.getPassword().subscribe(data => {
        console.log(data);
        this.generatePass = data;
        console.log(this.generatePass);
        this.student.password = this.generatePass;
      },
      error => console.log(error));
  }

  saveStudent() {
    this.studentService.createStudent(this.student).subscribe(data => {
        console.log(data);
        this.goToStudentList();
      },
      error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }

}
