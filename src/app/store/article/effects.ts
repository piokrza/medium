import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '@article/services/article.service';
import { Article } from '@core/models/article.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArticleActions } from '@store/article';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

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

export const deleteArticle = createEffect(
  (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(ArticleActions.deleteArticle),
      exhaustMap(({ slug }) =>
        articleService.deleteArticle$(slug).pipe(
          map(() => {
            return ArticleActions.deleteArticleSuccess();
          }),
          catchError(() => {
            return of(ArticleActions.deleteArticleFailure());
          })
        )
      )
    );
  },
  { functional: true }
);

export const redirectAfterDeleteArticle = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(ArticleActions.deleteArticle),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  { functional: true, dispatch: false }
);
