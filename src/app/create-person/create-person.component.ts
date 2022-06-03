import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person: Person = new Person();
  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  savePerson() {
    this.personService.createPerson(this.person).subscribe(data => {
      console.log(data);
      this.goToPersonList();
    },
      error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  goToPersonList(){
    this.router.navigate(['/persons']);
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.person);
    this.savePerson();
  }

}
