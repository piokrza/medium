import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormComponent } from '@auth/components/auth-form/auth-form.component';
import { AuthFormMode } from '@auth/enums/auth-form-mode.enum';
import { AuthFormPayload } from '@auth/models/auth-form-payload.model';
import { LoginForm } from '@auth/models/form.model';
import { AuthFormService } from '@auth/services/auth-form.service';

const LoginImports: Array<any> = [CommonModule, AuthFormComponent];
const LoginProviders: Array<any> = [AuthFormService];
@Component({
  selector: 'app-login',
  standalone: true,
  imports: LoginImports,
  providers: LoginProviders,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  public loginForm: FormGroup<LoginForm> = inject(AuthFormService).getLoginForm();

  public authFormMode = AuthFormMode;

  public onFormSubmit(loginFormPayload: AuthFormPayload): void {}
}
