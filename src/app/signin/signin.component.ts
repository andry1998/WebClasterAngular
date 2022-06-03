import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Request } from '../request.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username = '';
  password = '';

  isSignedin = false;

  error = '';

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isSignedin = this.authService.isUserSignedin();

    if (this.isSignedin) {
      this.router.navigateByUrl('home');
    }
  }

  doSignin(): any{
    if (this.username !== '' && this.username !== null && this.password !== '' && this.password !== null) {
      const request: Request = { email: this.username, password: this.password};

      this.authService.signin(request).subscribe((result) => {
        this.router.navigateByUrl('students');
      }, () => {
        this.error = 'Either invalid credentials or something went wrong';
      });
    } else {
      this.error = 'Invalid Credentials';
    }
  }

}
