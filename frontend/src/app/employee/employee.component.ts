import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'] // 
})
export class EmployeeComponent {
  constructor(private router: Router) {}

  logout(): void {
    sessionStorage.clear(); // or localStorage.clear() depending on your setup
    this.router.navigate(['/login']);
  }
}
