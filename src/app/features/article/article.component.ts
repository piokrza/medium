import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrentUser } from '@auth/models/current-user.model';
import { Article } from '@core/models/article.model';
import { Store } from '@ngrx/store';
import { TagListComponent } from '@shared/components/tag-list/tag-list.component';
import { ArticleActions, ArticleSelectors } from '@store/article';
import { AuthSelectors } from '@store/auth';
import { Observable, combineLatestWith, filter, map } from 'rxjs';

const ArticleImports: Array<any> = [CommonModule, RouterLink, MatProgressSpinnerModule, TagListComponent];

@Component({
  selector: 'app-article',
  standalone: true,
  imports: ArticleImports,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArticleComponent implements OnInit {
  private readonly store: Store = inject(Store);

  public readonly isAuthor$: Observable<boolean> = this.checkIfCurrentUserIsAuthor$();
  public readonly error$: Observable<string | null> = this.store.select(ArticleSelectors.error);
  public readonly isLoading$: Observable<boolean> = this.store.select(ArticleSelectors.isLoading);
  public readonly article$: Observable<Article | null> = this.store.select(ArticleSelectors.article);

  private readonly slug: string = inject(ActivatedRoute).snapshot.paramMap.get('slug') ?? '';

  public ngOnInit(): void {
    this.store.dispatch(ArticleActions.getArticle({ slug: this.slug }));
  }

  public deleteArticle(): void {
    this.store.dispatch(ArticleActions.deleteArticle({ slug: this.slug }));
  }

  private checkIfCurrentUserIsAuthor$(): Observable<boolean> {
    return this.store
      .select(ArticleSelectors.article)
      .pipe(
        combineLatestWith(
          this.store
            .select(AuthSelectors.currentUser)
            .pipe(filter((currentUser: CurrentUser | null | undefined): currentUser is CurrentUser | null => currentUser !== undefined))
        )
      )
      .pipe(
        map(([article, currentUser]: [Article | null, CurrentUser | null]): boolean => {
          if (!article || !currentUser) return false;
          return article.author.username === currentUser.username;
        })
      );
  }
}
