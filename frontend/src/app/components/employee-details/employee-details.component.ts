import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentEmployee: Employee = {
    name: '',
    rut: '',
    rol: '',
    contacto: '',
  }

  message = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    if (!this.viewMode){
      this.message = '',
      this.getEmployee(this.route.snapshot.params["_id"]);
    }
  }
  getEmployee(id: string): void{
    this.employeeService.getEmployee(id)
      .subscribe({
        next: (data) => {
          this.currentEmployee = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  employeeUpdated(): void{
    this.message = '';
    this.employeeService.editEmployee(this.currentEmployee._id, this.currentEmployee)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message: 'Empleado actualizado'
        },
        error: (e) => console.error(e)
      });
  }
  employeeDeleted(): void{
    this.employeeService.deleteEmployee(this.currentEmployee._id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/personal']);
        },
        error: (e) => console.error(e)
      })
  }
}
