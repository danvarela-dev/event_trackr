import { Route } from '@angular/router';
import { authGuard } from './guards/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cms',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'event_summary',
        loadComponent: () =>
          import('./components/event-summary/event-summary.component').then(
            m => m.EventSummaryComponent,
          ),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./components/categories/categories.component').then(
            m => m.CategoriesComponent,
          ),
      },
      {
        path: 'events',
        loadComponent: () =>
          import('./components/events/events.component').then(
            m => m.EventsComponent,
          ),
      },
    ],
  },
];
