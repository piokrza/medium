import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DestroyComponent } from '@core/abstracts/destroy/destroy.component';
import { FeedComponent } from '@shared/components/feed/feed.component';
import { FeedTogglerComponent } from '@shared/components/feed-toggler/feed-toggler.component';
import { PopularTagsComponent } from '@shared/components/popular-tags/popular-tags.component';
import { BannerComponent } from '@ui/banner/banner.component';
import { takeUntil } from 'rxjs';

const TagFeedImports: Array<any> = [CommonModule, FeedComponent, BannerComponent, PopularTagsComponent, FeedTogglerComponent];

@Component({
  selector: 'app-tag-feed',
  standalone: true,
  imports: TagFeedImports,
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TagFeedComponent extends DestroyComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  public apiUrl: string = '';
  public tagName: string = '';

  public ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe({
      next: (params: Params): void => {
        this.tagName = params['slug'];
        this.apiUrl = `articles?tag=${this.tagName}`;
      },
    });
  }
}
