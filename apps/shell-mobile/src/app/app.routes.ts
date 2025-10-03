import { Route } from '@angular/router';
import { TabsComponent } from '../ui/tabs/tabs';

export const appRoutes: Route[] = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'trending-repositories',
        loadComponent: () =>
          import('../ui/trending-repositories-page/trending-repositories-page').then(
            m => m.TrendingRepositoriesPageComponent
          ),
      },
      {
        path: 'air-quality',
        loadComponent: () => import('../ui/dashboard-page/dashboard-page').then(m => m.DashboardPage),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tabs/trending-repositories',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/trending-repositories',
    pathMatch: 'full',
  },
];
