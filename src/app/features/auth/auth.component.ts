import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const AuthImports: Array<any> = [CommonModule, RouterOutlet];

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: AuthImports,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {}
