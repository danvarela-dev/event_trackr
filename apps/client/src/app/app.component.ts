import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AsyncPipe } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent, AsyncPipe, ToastModule],
  selector: 'event-trackr-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Event Trackr';
}
