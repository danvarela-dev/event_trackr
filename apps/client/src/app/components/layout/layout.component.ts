import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { EventsComponent } from '../events/events.component';
import {
  ActivatedRoute,
  IsActiveMatchOptions,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Observable, filter, map, startWith, take } from 'rxjs';
import { EventSummaryComponent } from '../event-summary/event-summary.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { User } from '@event-trackr/shared';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
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
    TopBarComponent,
    ProgressSpinnerModule,
    ProgressBarModule,
    NgOptimizedImage,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  @ViewChild('menu') menu: Menu;

  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  authService = inject(AuthenticationService);
  pageTitle$: Observable<string>;
  user$: Observable<User>;

  sidebarItems: { id: number; label: string; icon: string; link: string }[] = [
    {
      id: 1,
      label: 'Inicio',
      icon: 'pi pi-fw pi-home',
      link: '/layout/home',
    },
    {
      id: 2,
      label: 'Eventos',
      icon: 'pi pi-fw pi-calendar',
      link: '/layout/event_summary',
    },
    {
      id: 3,
      label: 'Categorias',
      icon: 'pi pi-fw pi-tag',
      link: '/layout/categories',
    },
    {
      id: 4,
      label: 'Usuarios',
      icon: 'pi pi-fw pi-users',
      link: '/layout/users',
    },
  ];

  menuItems: MenuItem[] = [
    {
      label: 'Perfil',
      icon: 'pi pi-fw pi-user',
      command: () => {
        this.user$.pipe(take(1)).subscribe(user => {
          this.router.navigate([`/layout/user-profile/${user.id}`]);
        });
      },
    },
    {
      label: 'Configuracion',
      icon: 'pi pi-fw pi-cog',
      command: () => {
        this.router.navigate(['/settings']);
      },
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

  ngOnInit() {
    this.pageTitle$ = this.getCurrentTitle();

    this.user$ = this.authService
      .getUser()
      .pipe(map(response => response.result));
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

  getCurrentTitle(): Observable<string> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      startWith(this.router), // Emit initial value
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }

        return route.snapshot.data['title'] ?? 'None';
      }),
    );
  }

  openMenu(event: MouseEvent) {
    if (this.menu) {
      this.menu.toggle(event);
    }
  }
}
