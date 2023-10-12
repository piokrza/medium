import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Article } from '@core/models';
import { AddToFavoritesComponent } from '@feed/components/add-to-favorites';
import { TagListComponent } from '@shared/components/tag-list';

const FeedCardImports: Array<any> = [RouterLink, CommonModule, MatCardModule, TagListComponent, AddToFavoritesComponent];

@Component({
  selector: 'app-feed-card',
  standalone: true,
  imports: FeedCardImports,
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedCardComponent {
  @Input() public article!: Article;
}
