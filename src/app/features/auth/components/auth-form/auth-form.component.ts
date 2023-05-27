import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthForm } from '@auth/models/auth-form.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const AuthFormImports: Array<any> = [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule];

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: AuthFormImports,
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  public form!: FormGroup<AuthForm>;
}
