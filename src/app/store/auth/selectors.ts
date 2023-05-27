import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as AuthState, FeatureKey } from '@store/auth';

const selectAuthState = createFeatureSelector<AuthState>(FeatureKey);

export const isLoading = createSelector(selectAuthState, ({ isLoading }: AuthState): boolean => isLoading);
