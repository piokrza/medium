import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '@store/auth';

export interface AppState {
  [fromAuth.FeatureKey]: fromAuth.State;
}

export const ROOT_REDUCER_TOKEN = 'Root reducers';

export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<AppState>>(ROOT_REDUCER_TOKEN, {
  factory: (): ActionReducerMap<AppState, Action> => ({
    [fromAuth.FeatureKey]: fromAuth.reducer,
  }),
});
