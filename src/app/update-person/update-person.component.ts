import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  id: number;
  person: Person = new Person();

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.personService.getPersonById(this.id).subscribe(data => {
      this.person = data;
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.personService.updatePerson(this.id, this.person).subscribe(data => {
      this.goToPersonList();
    }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  goToPersonList(){
    this.router.navigate(['/persons']);
  }
}
