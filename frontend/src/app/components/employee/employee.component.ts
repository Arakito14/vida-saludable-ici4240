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
  title = '';

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

}
