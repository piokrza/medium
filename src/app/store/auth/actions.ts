import { CurrentUser } from '@auth/models/current-user.model';
import { RegisterRequest } from '@auth/models/register-request.model';
import { createAction, props } from '@ngrx/store';

export const register = createAction('[Auth] Register', props<{ request: RegisterRequest }>());
export const registerSuccess = createAction('[Auth] Register Success', props<{ currentUser: CurrentUser }>());
export const registerFailure = createAction('[Auth] Register Failure');
