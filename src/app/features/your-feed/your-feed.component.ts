import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeedComponent } from '@shared/components/feed/feed.component';
import { FeedTogglerComponent } from '@shared/components/feed-toggler/feed-toggler.component';
import { PopularTagsComponent } from '@shared/components/popular-tags/popular-tags.component';
import { BannerComponent } from '@ui/banner/banner.component';

const YourFeedImports: Array<any> = [CommonModule, FeedComponent, BannerComponent, PopularTagsComponent, FeedTogglerComponent];

@Component({
  selector: 'app-your-feed',
  standalone: true,
  imports: YourFeedImports,
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class YourFeedComponent {
  public readonly apiUrl: string = 'articles';
}
