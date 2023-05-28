import { inject } from '@angular/core';
import { ArticleService } from '@article/services/article.service';
import { Article } from '@core/models/article.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleActions } from '@store/article';
import { catchError, exhaustMap, map, of } from 'rxjs';

export const getArticle = createEffect(
  (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(ArticleActions.getArticle),
      exhaustMap(({ slug }) =>
        articleService.getArticle$(slug).pipe(
          map((article: Article) => {
            return ArticleActions.getArticleSuccess({ article });
          }),
          catchError(() => {
            return of(ArticleActions.getArticleFailure());
          })
        )
      )
    );
  },
  { functional: true }
);
