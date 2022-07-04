import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee'
import { Observable } from 'rxjs';
const URL_API = 'http://localhost:4000/api/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

  constructor (private http: HttpClient) { }
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(URL_API);
  }
  getEmployee(id: any): Observable<Employee>{
    return this.http.get(`${URL_API}/${id}`);
  }
  createEmployee(data: any): Observable<any>{
    console.log(data)
    return this.http.post(URL_API, data)
  }
  editEmployee(id: any, data: any): Observable<any>{
    return this.http.put(`${URL_API}/${id}`, data);
  }
  deleteEmployee(id: any): Observable<any>{
    return this.http.delete(`${URL_API}/${id}`);
  }


}
