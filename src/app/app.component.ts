import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '@store/auth';
import { TopBarComponent } from '@ui/top-bar/top-bar.component';

const AppImports: Array<any> = [CommonModule, RouterOutlet, MatButtonModule, TopBarComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: AppImports,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly store: Store = inject(Store);

  public ngOnInit(): void {
    this.store.dispatch(AuthActions.getCurrentUser());
  }
}
