import { RegisterRequest } from '@auth/models/register-request.model';
import { createAction, props } from '@ngrx/store';

export const register = createAction('[Auth] Register', props<{ request: RegisterRequest }>());
