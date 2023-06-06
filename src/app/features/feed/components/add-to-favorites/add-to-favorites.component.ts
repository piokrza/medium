import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const AddToFavoritesImports: Array<any> = [CommonModule, MatButtonModule, MatIconModule];

@Component({
  selector: 'app-add-to-favorites',
  standalone: true,
  imports: AddToFavoritesImports,
  template: `
    <button (click)="handleLike()" [color]="isFavorited ? 'accent' : 'primary'" mat-icon-button>
      <mat-icon>favorite</mat-icon>
      <span>{{ favoritesCount }}</span>
    </button>
  `,
  styleUrls: ['./add-to-favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddToFavoritesComponent {
  @Input() public isFavorited: boolean = false;
  @Input() public favoritesCount: number = 0;
  @Input() public articleSlug: string = '';

  public handleLike(): void {
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else this.favoritesCount + 1;

    this.isFavorited = !this.isFavorited;
  }
}
