import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-topmenubar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './topmenubar.component.html',
  styleUrl: './topmenubar.component.scss'
})
export class TopmenubarComponent {

  @Output() toggleMenu = new EventEmitter<string>();

  setToggleMenu(){
    console.log('oi')
    this.toggleMenu.emit();
  }


}
