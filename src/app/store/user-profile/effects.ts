import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserProfileActions } from '@store/user-profile';
import { UserProfile } from '@user-profile/models';
import { UserProfileService } from '@user-profile/services';
import { exhaustMap, map, catchError, of } from 'rxjs';

export const getUserProfile = createEffect(
  (actions$ = inject(Actions), userProfileService = inject(UserProfileService)) => {
    return actions$.pipe(
      ofType(UserProfileActions.getUserProfile),
      exhaustMap(({ slug }) => {
        return userProfileService.loadUserProfile$(slug).pipe(
          map((userProfile: UserProfile) => {
            return UserProfileActions.getUserProfileSuccess({ userProfile });
          }),
          catchError(() => {
            return of(UserProfileActions.getUserProfileFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
