import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '@auth/components/auth-form/auth-form.component';

const RegisterImports: Array<any> = [CommonModule, AuthFormComponent];
@Component({
  selector: 'app-register',
  standalone: true,
  imports: RegisterImports,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export default class RegisterComponent {}
