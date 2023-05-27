import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const AuthImports: Array<any> = [CommonModule, RouterOutlet];

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: AuthImports,
  template: `<section><router-outlet /></section>`,
})
export default class AuthComponent {}
