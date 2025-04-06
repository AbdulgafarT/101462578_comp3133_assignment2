import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GraphqlService } from '../services/graphql.service'; 
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
  imports: [CommonModule, FormsModule], 
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(
    private graphqlService: GraphqlService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  onLogin() {
    if (!this.email || !this.password) {
      this.message = 'All fields are required';
      return;
    }

    this.graphqlService.login({ email: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        const token = res?.data?.login?.token;
        if (token) {
          this.sessionService.setToken(token);
          this.message = 'Login successful!';
          this.router.navigate(['/employee']); 
        } else {
          this.message = 'Login failed: No token received.';
        }
      },
      error: (err: any) => {
        console.error('Login error:', err);
        this.message = 'Login failed!';
      }
    });
  }
}
