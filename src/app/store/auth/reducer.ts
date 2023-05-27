import { CurrentUser } from '@auth/models/current-user.model';
import { BackendErrors } from '@core/models/backend-errors.model';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '@store/auth';

export const FeatureKey = 'auth';

export interface State {
  isLoading: boolean;
  isSubmitting: boolean;
  currentUser: CurrentUser | null | undefined;
  errors: BackendErrors | null;
}

const initialState: State = {
  isLoading: false,
  isSubmitting: false,
  currentUser: undefined,
  errors: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.register, (state): State => {
    return { ...state, isSubmitting: true };
  }),
  on(AuthActions.registerSuccess, (state, { currentUser }): State => {
    return { ...state, isSubmitting: false, currentUser };
  }),
  on(AuthActions.registerFailure, (state, { errors }): State => {
    return { ...state, isSubmitting: false, errors };
  })
);
