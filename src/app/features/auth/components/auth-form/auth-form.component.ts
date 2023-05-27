import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthFormMode } from '@auth/enums/auth-form-mode.enum';
import { AuthFormPayload } from '@auth/models/auth-form-payload.model';
import { LoginForm, RegisterForm } from '@auth/models/form.model';
import { AuthFormService } from '@auth/services/auth-form.service';

const AuthFormImports: Array<any> = [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule];
const AuthFormProviders: Array<any> = [AuthFormService];

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: AuthFormImports,
  providers: AuthFormProviders,
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  @Input() public form!: FormGroup<RegisterForm> | FormGroup<LoginForm>;
  @Input() public mode!: AuthFormMode;
  @Output() public formSubmit: EventEmitter<AuthFormPayload> = new EventEmitter<AuthFormPayload>();

  public AuthFormMode = AuthFormMode;

  public onSubmit(): void {
    this.formSubmit.emit(this.form.getRawValue());
  }
}
