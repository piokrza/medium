import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const SettingsImports: Array<any> = [RouterOutlet];

@Component({
  selector: 'app-settings-view',
  standalone: true,
  imports: SettingsImports,
  template: `
    <section>
      <router-outlet />
    </section>
  `,
  styleUrls: ['./settings-view.component.scss'],
})
export default class SettingsViewComponent {}
