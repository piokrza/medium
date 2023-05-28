import { Article } from '@core/models/article.model';
import { routerNavigatedAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { ArticleActions } from '@store/article';

export const FeatureKey = 'article';

export interface State {
  isLoading: boolean;
  error: string | null;
  article: Article | null;
}

const initialState: State = {
  isLoading: false,
  error: null,
  article: null,
};

export const reducer = createReducer(
  initialState,

  on(ArticleActions.getArticle, (state): State => {
    return { ...state, isLoading: true };
  }),
  on(ArticleActions.getArticleSuccess, (state, { article }): State => {
    return { ...state, isLoading: false, article };
  }),
  on(ArticleActions.getArticleFailure, (state): State => {
    return { ...state, isLoading: false };
  }),

  on(routerNavigatedAction, () => initialState)
);
