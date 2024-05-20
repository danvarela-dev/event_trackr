import { Component, OnInit, WritableSignal, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AsyncPipe } from '@angular/common';
import { Observable, take } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent, AsyncPipe],
  selector: 'event-trackr-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Event Trackr';
}
