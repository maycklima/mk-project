import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { HttpClientModule } from '@angular/common/http';
import { AtividadeIndexComponent} from '../../pages/atividade/container/atividade-index.component';

@Component({
  selector: 'app-home',
  standalone: true,
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [AtividadeIndexComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}

