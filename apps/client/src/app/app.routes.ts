import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent),
  },
  // {
  //   path: 'categories',
  //   loadComponent: () =>
  //     import('./components/categories/categories.component').then(
  //       m => m.CategoriesComponent,
  //     ),
  // },
  // {
  //   path: 'events',
  //   loadComponent: () =>
  //     import('./components/events/events.component').then(
  //       m => m.EventsComponent,
  //     ),
  // },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent),
  },
];
