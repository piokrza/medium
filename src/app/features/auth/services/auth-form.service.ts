import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm, RegisterForm } from '@auth/models/form.model';

@Injectable()
export class AuthFormService {
  private fb: FormBuilder = inject(FormBuilder);

  public getRegisterForm(): FormGroup<RegisterForm> {
    return this.fb.nonNullable.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public getLoginForm(): FormGroup<LoginForm> {
    return this.fb.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
