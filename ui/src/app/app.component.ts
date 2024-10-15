import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { FootbarComponent } from './layout/footbar/footbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopmenubarComponent } from './layout/topmenubar/topmenubar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopmenubarComponent, FootbarComponent, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui';
}
