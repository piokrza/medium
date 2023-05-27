import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthForm } from '@auth/models/auth-form.model';

@Injectable({ providedIn: 'root' })
export class AuthFormService {
  private fb: FormBuilder = inject(FormBuilder);

  public getAuthForm(): FormGroup<AuthForm> {
    return this.fb.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
