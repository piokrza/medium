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
  {
    path: '',
    loadComponent: () => import('@feed/feed-view.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('@feed/pages/your-feed/your-feed.component'),
      },
      {
        path: Route.Feed,
        loadComponent: () => import('@feed/pages/your-feed/your-feed.component'),
      },
      {
        path: `${Route.Tags}${RouteFragment.Slug}`,
        loadComponent: () => import('@feed/pages/tag-feed/tag-feed.component'),
      },
    ],
  },
  {
    path: `${Route.Articles}${RouteFragment.New}`,
    loadComponent: () => import('@article/components/article-form/article-form.component'),
  },
  {
    path: `${Route.Articles}${RouteFragment.Slug}`,
    loadComponent: () => import('@article/article.component'),
  },
];
