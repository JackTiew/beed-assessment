import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient,
  ) { }

  getStudentData(id: number) {
    return this.http.get(`${environment.url}/getStudentById/${id}`).toPromise();
  }
}
