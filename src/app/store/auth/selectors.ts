import { createSelector } from '@ngrx/store';
import { State as AuthState } from '@store/auth';
import { AppState } from '@store/root-reducer';

const selectAuthState = ({ auth }: AppState): AuthState => auth;

export const isLoading = createSelector(selectAuthState, ({ isLoading }: AuthState): boolean => isLoading);
