import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FeedComponent } from '@feed/components/feed';
import { FeedTogglerComponent } from '@feed/components/feed-toggler';
import { PopularTagsComponent } from '@shared/components/popular-tags';
import { BannerComponent } from '@ui/banner';

const FeedContainerImports: Array<any> = [BannerComponent, FeedTogglerComponent, PopularTagsComponent, FeedComponent];

@Component({
  selector: 'app-feed-container',
  standalone: true,
  imports: FeedContainerImports,
  templateUrl: './feed-container.component.html',
  styleUrls: ['./feed-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedContainerComponent {
  @Input({ required: true }) public apiUrl: string = '';
  @Input() public tagName: string = '';
}
