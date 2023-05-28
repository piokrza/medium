import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { DestroyComponent } from '@core/abstracts/destroy/destroy.component';
import { BackendErrors } from '@core/models/backend-errors.model';
import { GetFeedResponse } from '@core/models/get-feed-response.model';
import { Store } from '@ngrx/store';
import { ErrorMessageComponent } from '@shared/components/error-message/error-message.component';
import { PaginatorComponent } from '@shared/components/paginator/paginator.component';
import { TagListComponent } from '@shared/components/tag-list/tag-list.component';
import { FeedActions, FeedSelectors } from '@store/feed';
import queryString from 'query-string';
import { Observable, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const FeedImports: Array<any> = [
  CommonModule,
  RouterLink,
  MatCardModule,
  MatListModule,
  MatProgressSpinnerModule,
  ErrorMessageComponent,
  PaginatorComponent,
  TagListComponent,
];

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: FeedImports,
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent extends DestroyComponent implements OnInit {
  @Input() public apiUrl: string = '';

  private readonly store: Store = inject(Store);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  public readonly feedData$: Observable<GetFeedResponse | null> = this.store.select(FeedSelectors.feedData);
  public readonly error$: Observable<string | null> = this.store.select(FeedSelectors.errors);
  public readonly isLoading$: Observable<boolean> = this.store.select(FeedSelectors.isLoading);

  public currentPage: number = 0;
  public readonly limit: number = environment.paginationLimit;
  public readonly baseUrl: string = inject(Router).url.split('?')[0];

  public ngOnInit(): void {
    this.loadFeed();

    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe({
      next: (params: Params): void => {
        this.currentPage = Number(params['page'] || '1');
        this.loadFeed();
      },
    });
  }

  private loadFeed(): void {
    const offset: number = this.currentPage * this.limit - this.limit;
    const parsedUrl: queryString.ParsedUrl = queryString.parseUrl(this.apiUrl);
    const stringifiedParams: string = queryString.stringify({ limit: this.limit, offset, ...parsedUrl.query });

    const apiUrlWithParams: string = `${parsedUrl.url}?${stringifiedParams}`;

    this.store.dispatch(FeedActions.getFeed({ url: apiUrlWithParams }));
  }
}
