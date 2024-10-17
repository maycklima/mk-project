import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule, CommonModule, MatIcon, MaterialModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() closeDrawer = new EventEmitter<void>();

  constructor(private readonly router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]);
    this.closeDrawer.emit();
  }
}
