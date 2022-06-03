import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = 'http://localhost:8080/persons';

  constructor(private http: HttpClient) { }

  getPersonList(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.baseUrl}`);
  }

  createPerson(person: Person): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, person);
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  updatePerson(id: number, person: Person): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, person);
  }

  deletePerson(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getByAdminRole(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.baseUrl}/'admin'`);
  }

  getByUserRole(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.baseUrl}/'admin'`);
  }

  getByUserOrAdminRole(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.baseUrl}/'admin'`);
  }

  getByAnonymousRole(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.baseUrl}/'admin'`);
  }

}
