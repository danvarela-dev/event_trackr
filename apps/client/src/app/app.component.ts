import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AsyncPipe } from '@angular/common';

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
