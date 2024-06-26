import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { EventsComponent } from '../events/events.component';
import { IsActiveMatchOptions, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
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
export class LayoutComponent implements OnInit {
  title = 'Event Trackr';
  @ViewChild('menu') menu: Menu;

  router = inject(Router);
  authService = inject(AuthenticationService);
  isLoggedIn$: Observable<boolean>;

  showLogin = true;

  sidebarItems: { id: number; label: string; icon: string; link: string }[] = [
    {
      id: 1,
      label: 'Inicio',
      icon: 'pi pi-fw pi-home',
      link: '/cms/home',
    },
    {
      id: 2,
      label: 'Eventos',
      icon: 'pi pi-fw pi-calendar',
      link: '/cms/event_summary',
    },
    {
      id: 3,
      label: 'Categorias',
      icon: 'pi pi-fw pi-tag',
      link: '/cms/categories',
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

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.loggedIn$.asObservable();
  }

  isRouteActive(link: string): boolean {
    const options: IsActiveMatchOptions = {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    };

    return this.router.isActive(link, options);
  }

  getUser(): Observable<never> {
    return this.authService.loggedInUser$.asObservable() as Observable<never>;
  }

  openMenu(event: MouseEvent) {
    if (this.menu) {
      this.menu.toggle(event);
    }
  }
}
