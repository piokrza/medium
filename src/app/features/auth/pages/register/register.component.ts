import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormComponent } from '@auth/components/auth-form/auth-form.component';
import { AuthFormMode } from '@auth/enums/auth-form-mode.enum';
import { AuthFormPayload } from '@auth/models/auth-form-payload.model';
import { RegisterForm } from '@auth/models/form.model';
import { RegisterRequest } from '@auth/models/register-request.model';
import { AuthFormService } from '@auth/services/auth-form.service';
import { Store } from '@ngrx/store';
import { AuthActions } from '@store/auth';

const RegisterImports: Array<any> = [CommonModule, AuthFormComponent];
const RegisterProviders: Array<any> = [AuthFormService];
@Component({
  selector: 'app-register',
  standalone: true,
  imports: RegisterImports,
  providers: RegisterProviders,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent {
  private readonly store: Store = inject(Store);

  public readonly registerForm: FormGroup<RegisterForm> = inject(AuthFormService).getRegisterForm();
  public readonly authFormMode = AuthFormMode;

  public onRegisterFormSubmit(user: AuthFormPayload): void {
    this.store.dispatch(AuthActions.register({ request: { user } as RegisterRequest }));
  }
}
