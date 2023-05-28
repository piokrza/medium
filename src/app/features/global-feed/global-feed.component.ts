import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeedComponent } from '@shared/components/feed/feed.component';
import { BannerComponent } from '@ui/banner/banner.component';

const GlobalFeedImports: Array<any> = [CommonModule, FeedComponent, BannerComponent];

@Component({
  selector: 'app-global-feed',
  standalone: true,
  imports: GlobalFeedImports,
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GlobalFeedComponent {
  public apiUrl: string = 'articles';
}
