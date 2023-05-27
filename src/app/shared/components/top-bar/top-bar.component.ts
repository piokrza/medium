import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CurrentUser } from '@auth/models/current-user.model';
import { Store } from '@ngrx/store';
import { AuthSelectors } from '@store/auth';
import { Observable } from 'rxjs';

const TopBarImports: Array<any> = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  RouterModule,
  MatRippleModule,
  MatButtonModule,
];

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: TopBarImports,
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  private readonly store: Store = inject(Store);

  public currentUser$: Observable<CurrentUser | null | undefined> = this.store.select(AuthSelectors.currentUser);
}
