import { Routes } from '@angular/router';
import { RouteFragment } from '@core/enums/route-fragment.enum';
import { Route } from '@core/enums/route.enum';

export const routes: Routes = [
  {
    path: Route.Authentication,
    loadComponent: () => import('@auth/auth.component'),
    children: [
      {
        path: RouteFragment.Register,
        loadComponent: () => import('@auth/pages/register/register.component'),
      },
      {
        path: RouteFragment.Login,
        loadComponent: () => import('@auth/pages/login/login.component'),
      },
    ],
  },
];
