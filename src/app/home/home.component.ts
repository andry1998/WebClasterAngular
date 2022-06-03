import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isSignedin = false;

  signedinUser = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private authService: AuthService, private personService: PersonService) {}

  ngOnInit() {
    this.isSignedin = this.authService.isUserSignedin();
    this.signedinUser = this.authService.getSignedinUser();

    if (!this.authService.isUserSignedin()) {
      this.router.navigateByUrl('signin');
    }

    if (this.isSignedin) {
      this.personService.getByUserRole();

    }
  }

  doSignout(): any{
    this.authService.signout();
  }

}
