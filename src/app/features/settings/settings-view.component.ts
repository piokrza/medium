import { Component } from '@angular/core';

const SettingsImports: Array<any> = [];

@Component({
  selector: 'app-settings-view',
  standalone: true,
  imports: SettingsImports,
  template: ` <p>settings-view works!</p> `,
  styleUrls: ['./settings-view.component.scss'],
})
export default class SettingsViewComponent {}
