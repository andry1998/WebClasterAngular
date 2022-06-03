import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[];

  isSignedin = false;

  signedinUser = '';

  constructor(private personService: PersonService, private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.isSignedin = this.authService.isUserSignedin();
    this.signedinUser = this.authService.getSignedinUser();
    this.getPerson();

    if (!this.authService.isUserSignedin()) {
      this.router.navigateByUrl('signin');
    }

    if (this.isSignedin) {
      this.personService.getByUserRole();

    }

  }

    private getPerson(){
      this.personService.getPersonList().subscribe((data: Person[]) => {
        console.log(data);
        this.persons = data;
      });
    }

    createPerson(){
    this.router.navigate(['create-person']);
    }

    updatePerson(id: number){
      this.router.navigate(['update-person', id]);
    }

    deletePerson(id: number){
      this.personService.deletePerson(id).subscribe( data => {
        console.log(data);
        this.getPerson();
      });
    }

  doSignout(): any{
    this.authService.signout();
  }
}


