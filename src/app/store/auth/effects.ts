import { inject } from '@angular/core';
import { CurrentUser } from '@auth/models/current-user.model';
import { RegisterRequest } from '@auth/models/register-request.model';
import { AuthService } from '@auth/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '@store/auth';
import { catchError, exhaustMap, map, of } from 'rxjs';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(AuthActions.register),
      exhaustMap(({ request }) => {
        return authService.register$(<RegisterRequest>request).pipe(
          map((currentUser: CurrentUser) => {
            console.log('from effect');
            return AuthActions.registerSuccess({ currentUser });
          }),
          catchError(() => {
            return of(AuthActions.registerFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
