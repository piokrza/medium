import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '@store/auth';

export const FeatureKey = 'auth';

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.register, (state): State => {
    return { isLoading: true };
  })
);
