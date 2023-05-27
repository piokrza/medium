import { CurrentUser } from '@auth/models/current-user.model';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '@store/auth';

export const FeatureKey = 'auth';

export interface State {
  isLoading: boolean;
  currentUser: CurrentUser | null;
}

const initialState: State = {
  isLoading: false,
  currentUser: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.register, (state): State => {
    return { ...state, isLoading: true };
  }),
  on(AuthActions.registerSuccess, (state, { currentUser }): State => {
    return { ...state, isLoading: false, currentUser };
  }),
  on(AuthActions.registerFailure, (state): State => {
    return { ...state, isLoading: false };
  })
);
