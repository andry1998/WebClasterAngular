import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Request} from './request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/';
  private request: Request;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  signin(request): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'auth/login', request, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).pipe(map((resp) => {
      sessionStorage.setItem('user', request.email);
      sessionStorage.setItem('token', resp.token);
      sessionStorage.setItem('role', resp.role);
      console.log(resp);
      return resp;
    }));
  }

  signout(): any {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');

    this.router.navigateByUrl('auth/login');
  }

  isUserSignedin(): any {
    return sessionStorage.getItem('token') !== null;
  }

  getSignedinUser(): string{
    return sessionStorage.getItem('user') as string;
  }

  getToken(): string {
    return sessionStorage.getItem('token') as string;
  }

  getRole(): string{
    return sessionStorage.getItem('role') as string;
  }

}
