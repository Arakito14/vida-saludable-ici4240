import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee'
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  employees?: Employee[];
  currentEmployee: Employee = {};
  currentIndex = -1;
  name = '';

  constructor(private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void{
    this.employeService.getEmployees()
      .subscribe({
        next: (data) => {
          this.employees = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshEmployees(): void{
    this.retrieveEmployees();
    this.currentEmployee = {};
    this.currentIndex = -1;
  }

  getEmployee(id: string): void{
    this.employeService.getEmployee(id)
      .subscribe({
        next: (data) => {
          this.currentEmployee = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  secActiveEmployee(employee: Employee, index: number): void {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }

}
