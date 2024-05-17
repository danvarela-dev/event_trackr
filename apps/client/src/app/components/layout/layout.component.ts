import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { EventsComponent } from '../events/events.component';
import { IsActiveMatchOptions, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { User } from '@event-trackr/shared';
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Observable, filter } from 'rxjs';
import { EventSummaryComponent } from '../event-summary/event-summary.component';

@Component({
  selector: 'event-trackr-layout',
  standalone: true,
  imports: [
    CommonModule,
    SidebarModule,
    EventsComponent,
    EventSummaryComponent,
    RouterLink,
    ButtonModule,
    AvatarModule,
    MenuModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  title = 'Event Trackr';
  @ViewChild('menu') menu: Menu;

  router = inject(Router);
  authService = inject(AuthenticationService);

  sidebarItems: { id: number; label: string; icon: string; link: string }[] = [
    {
      id: 1,
      label: 'Inicio',
      icon: 'pi pi-fw pi-home',
      link: 'home',
    },
    {
      id: 2,
      label: 'Eventos',
      icon: 'pi pi-fw pi-calendar',
      link: 'event_summary',
    },
    {
      id: 3,
      label: 'Categorias',
      icon: 'pi pi-fw pi-tag',
      link: 'categories',
    },
  ];

  menuItems: MenuItem[] = [
    {
      label: 'Perfil',
      icon: 'pi pi-fw pi-user',
    },
    {
      label: 'Cerrar Sesion',
      icon: 'pi pi-fw pi-sign-out',
      command: () => {
        this.authService.logout();
        this.router.navigate(['/login']);
      },
    },
  ];

  isRouteActive(link: string): boolean {
    const options: IsActiveMatchOptions = {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    };

    return this.router.isActive(link, options);
  }

  getUser(): Observable<any> {
    return this.authService.loggedInUser$.asObservable() as Observable<any>;
  }

  openMenu(event: MouseEvent) {
    if (this.menu) {
      this.menu.toggle(event);
    }
  }
}
