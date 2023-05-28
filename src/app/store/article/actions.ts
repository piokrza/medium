import { Article } from '@core/models/article.model';
import { createAction, props } from '@ngrx/store';

export const getArticle = createAction('[Article] Get article', props<{ slug: string }>());
export const getArticleSuccess = createAction('[Article] Get article success', props<{ article: Article }>());
export const getArticleFailure = createAction('[Article] Get article failure');

export const deleteArticle = createAction('[Article] Delete article', props<{ slug: string }>());
export const deleteArticleSuccess = createAction('[Article] Delete article success');
export const deleteArticleFailure = createAction('[Article] Delete article failure');
