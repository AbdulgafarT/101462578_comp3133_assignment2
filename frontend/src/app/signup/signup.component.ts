import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GraphqlService } from '../services/graphql.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'], // ✅ Must be here
  imports: [CommonModule, FormsModule],   // ✅ Must be here
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  message = '';

  constructor(private graphqlService: GraphqlService) {}

  onSignup() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.graphqlService.signup(user).subscribe({
      next: (res: any) => {
        console.log('Signup success:', res);
        this.message = 'Signup successful!';
      },
      error: (err: any) => {
        console.error('Signup error:', err);
        this.message = 'Signup failed!';
      }
    });
  }
}
