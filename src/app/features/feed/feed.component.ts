import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const FeedImports: Array<any> = [RouterOutlet];

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: FeedImports,
  template: `
    <section>
      <router-outlet />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FeedComponent {}
