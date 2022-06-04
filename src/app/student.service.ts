import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }

  createStudent(student: Student): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getPassword(): Observable<String>{
    return this.http.get(`${this.baseUrl}/pwd`, {responseType: 'text'});
  }

  getByAdminRole(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/'admin'`);
  }

  getByUserRole(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/'admin'`);
  }

  getByUserOrAdminRole(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/'admin'`);
  }

  getByAnonymousRole(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/'admin'`);
  }
}
