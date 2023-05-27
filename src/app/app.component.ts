import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

const AppImports: Array<any> = [CommonModule, RouterOutlet, MatButtonModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: AppImports,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
