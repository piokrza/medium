import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthFormComponent } from '@auth/components/auth-form/auth-form.component';

const LoginImports: Array<any> = [CommonModule, AuthFormComponent];
@Component({
  selector: 'app-login',
  standalone: true,
  imports: LoginImports,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {}
