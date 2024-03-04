import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-topmenubar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './topmenubar.component.html',
  styleUrl: './topmenubar.component.scss'
})
export class TopmenubarComponent {
  irParaHome(){
    
  }

}
