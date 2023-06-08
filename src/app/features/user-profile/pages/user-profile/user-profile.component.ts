import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

const UserProfileImports: Array<any> = [CommonModule];

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: UserProfileImports,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserProfileComponent {}
