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
    path: 'layout',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        data: { title: 'Dashboard' },
        loadComponent: () =>
          import('./components/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'event_summary',
        data: { title: 'Resumen de Eventos' },
        loadComponent: () =>
          import('./components/event-summary/event-summary.component').then(
            m => m.EventSummaryComponent,
          ),
      },
      {
        path: 'categories',
        data: { title: 'Categorias' },
        loadComponent: () =>
          import('./components/categories/categories.component').then(
            m => m.CategoriesComponent,
          ),
      },
      {
        path: 'events',
        data: { title: 'Eventos' },
        loadComponent: () =>
          import('./components/events/events.component').then(
            m => m.EventsComponent,
          ),
      },
      {
        path: 'user-profile',
        loadComponent: () =>
          import('./components/user-profile/user-profile.component').then(
            m => m.UserProfileComponent,
          ),
      },
      {
        path: 'user-profile/new',
        data: { title: 'Usuario / Agregar Nuevo Usuario' },
        loadComponent: () =>
          import('./components/user-profile/user-profile.component').then(
            m => m.UserProfileComponent,
          ),
      },
      {
        path: 'user-profile/edit/:id',
        data: { title: 'Usuario / Editar' },
        loadComponent: () =>
          import('./components/user-profile/user-profile.component').then(
            m => m.UserProfileComponent,
          ),
      },
      {
        path: 'user-profile/:id',
        data: { title: 'Usuario / Perfil' },
        loadComponent: () =>
          import('./components/user-profile/user-profile.component').then(
            m => m.UserProfileComponent,
          ),
      },
      {
        path: 'users',
        data: { title: 'Usuarios' },
        loadComponent: () =>
          import('./components/users/users.component').then(
            m => m.UsersComponent,
          ),
      },
      {
        path: 'vault',
        data: { title: 'Bóveda' },
        loadComponent: () =>
          import('./components/vault/vault.component').then(
            m => m.VaultComponent,
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];
