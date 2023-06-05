import { Routes } from '@angular/router';
import { RouteFragment } from '@core/enums/route-fragment.enum';
import { Route } from '@core/enums/route.enum';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@feed/feed-view.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('@feed/pages/your-feed/your-feed.component'),
      },
      {
        path: Route.FEED,
        loadComponent: () => import('@feed/pages/your-feed/your-feed.component'),
      },
      {
        path: `${Route.TAGS}/${RouteFragment.SLUG}`,
        loadComponent: () => import('@feed/pages/tag-feed/tag-feed.component'),
      },
    ],
  },
  {
    path: Route.AUTHENTICATION,
    loadComponent: () => import('@auth/auth-view.component'),
    children: [
      {
        path: RouteFragment.REGISTER,
        loadComponent: () => import('@auth/pages/register/register.component'),
      },
      {
        path: RouteFragment.LOGIN,
        loadComponent: () => import('@auth/pages/login/login.component'),
      },
    ],
  },
  {
    path: Route.ARTICLES,
    loadComponent: () => import('@article/article-view.component'),
    children: [
      {
        path: RouteFragment.NEW,
        loadComponent: () => import('@article/pages/create-article/create-article.component'),
      },
      {
        path: RouteFragment.SLUG,
        loadComponent: () => import('@article/pages/article/article.component'),
      },
    ],
  },
  {
    path: Route.SETTINGS,
    loadComponent: () => import('@settings/settings-view.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('@settings/pages/settings/settings.component'),
      },
    ],
  },
];
