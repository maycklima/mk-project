import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopmenubarComponent } from './layout/topmenubar/topmenubar.component';
import { HttpClientModule } from '@angular/common/http';
import { FootbarComponent } from './layout/footbar/footbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopmenubarComponent, FootbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
