import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private readonly router: Router) {}

  setToggleMenu(){
    console.log('oi')
    this.toggleMenu.emit();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }


}
