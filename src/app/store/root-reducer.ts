import { InjectionToken } from '@angular/core';
import { RouterState, routerReducer } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '@store/auth';
import * as fromFeed from '@store/feed';

export interface AppState {
  router: RouterState;
  [fromAuth.FeatureKey]: fromAuth.State;
  [fromFeed.FeatureKey]: fromFeed.State;
}

export const ROOT_REDUCER_TOKEN = 'Root reducers';

export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<AppState>>(ROOT_REDUCER_TOKEN, {
  factory: (): ActionReducerMap<AppState, Action> => ({
    router: routerReducer,
    [fromAuth.FeatureKey]: fromAuth.reducer,
    [fromFeed.FeatureKey]: fromFeed.reducer,
  }),
});
