import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-global-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GlobalFeedComponent {}
