import { Component } from '@angular/core';
import { RandomIconComponent } from './random-icon/randomIcon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RandomIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
