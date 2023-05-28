import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Article } from '@core/models/article.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.baseApiUrl;

  public getArticle$(slug: string): Observable<Article> {
    return this.http.get<{ article: Article }>(`${this.baseUrl}/articles/${slug}`).pipe(map(({ article }): Article => article));
  }

  public deleteArticle$(slug: string): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/articles/${slug}`);
  }
}
