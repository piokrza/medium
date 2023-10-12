import { inject } from '@angular/core';
import { GetFeedResponse } from '@core/models';
import { FeedApi } from '@feed/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedActions } from '@store/feed';
import { catchError, exhaustMap, map, of } from 'rxjs';

export const getFeed = createEffect(
  (actions$ = inject(Actions), feedApi = inject(FeedApi)) => {
    return actions$.pipe(
      ofType(FeedActions.getFeed),
      exhaustMap(({ url }) => {
        return feedApi.loadFeed$(url).pipe(
          map((feed: GetFeedResponse) => {
            return FeedActions.getFeedSuccess({ feed });
          }),
          catchError(() => {
            return of(FeedActions.getFeedFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
