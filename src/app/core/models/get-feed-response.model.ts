import { Article } from '@core/models/article.model';

export interface GetFeedResponse {
  article: Article;
  articlesCount: number;
}
