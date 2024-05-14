import { Route } from '@angular/router';
import { authGuard } from './guards/guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'categories',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/categories/categories.component').then(
        m => m.CategoriesComponent,
      ),
  },
  {
    path: 'events',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/events/events.component').then(
        m => m.EventsComponent,
      ),
  },
  {
    path: 'event_summary',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/event-summary/event-summary.component').then(
        m => m.EventSummaryComponent,
      ),
  },
];
