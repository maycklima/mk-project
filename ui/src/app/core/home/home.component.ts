import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MovimentacoesComponent } from 'src/app/features/movimentacao/containers/index/movimentacoes.component';

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
  imports: [MovimentacoesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}

