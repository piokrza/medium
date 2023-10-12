import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '@ui/footer';
import { TopBarComponent } from '@ui/top-bar';

const LayoutImports: Array<any> = [TopBarComponent, FooterComponent];

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: LayoutImports,
  template: `
    <app-top-bar />

    <main>
      <ng-content />
    </main>

    <app-footer />
  `,
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
