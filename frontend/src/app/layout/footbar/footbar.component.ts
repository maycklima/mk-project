import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-footbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './footbar.component.html',
  styleUrl: './footbar.component.scss'
})
export class FootbarComponent {

}
