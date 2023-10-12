import { Article } from '@core/models';

export interface GetFeedResponse {
  articles: Article[];
  articlesCount: number;
}
