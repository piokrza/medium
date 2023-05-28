import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FeedComponent } from '@shared/components/feed/feed.component';
import { FeedTogglerComponent } from '@shared/components/feed-toggler/feed-toggler.component';
import { PopularTagsComponent } from '@shared/components/popular-tags/popular-tags.component';
import { BannerComponent } from '@ui/banner/banner.component';

const FeedContainerImports: Array<any> = [BannerComponent, FeedTogglerComponent, PopularTagsComponent, FeedComponent];

@Component({
  selector: 'app-feed-container',
  standalone: true,
  imports: FeedContainerImports,
  template: `
    <div class="feed">
      <app-banner />

      <div class="my-1">
        <app-feed-toggler />
      </div>

      <div class="container-max-w-lg">
        <section class="feed__content">
          <app-popular-tags />
          <app-feed [apiUrl]="apiUrl" />
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./feed-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedContainerComponent {
  @Input({ required: true }) public apiUrl: string = '';
}
