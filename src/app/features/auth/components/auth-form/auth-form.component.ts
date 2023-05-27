import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthForm } from '@auth/models/auth-form.model';

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
