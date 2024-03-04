import { DataSource } from '@angular/cdk/collections';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { MovimentacoesService } from './movimentacoes.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MovimentacaoAddEditDialogComponent } from '../movimentacao-add-edit-dialog/movimentacao-add-edit-dialog.component';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-movimentacoes',
  standalone: true,
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.scss'],
  imports: [MaterialModule, CommonModule]
})

export class MovimentacoesComponent implements OnInit {
  formulario!: FormGroup;
  usuario: any;
  lojas:any;
  usuarioFormulario: any;
  movimentacoes: any;
  totalEntrada: any;
  totalSaida: any;

  constructor(
  private router: Router,
  private _formBuilder: FormBuilder, 
  private _snackBar: MatSnackBar,
  private _movimentacoesService: MovimentacoesService,
  public dialog: MatDialog){}

  ngOnInit() {
  this.inicializarFormulario();
  this.getMovimentacoes();
  }
  
  inicializarFormulario(){
    this.formulario = this._formBuilder.group({
      usuario: ['mayck'],
    });
  }

  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MovimentacaoAddEditDialogComponent, {
      width: '520px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

getMovimentacoes(): void {
  this._movimentacoesService.getMovimentacoes()
    .pipe(
      tap({
        next: (data) => {
          this.totalEntrada = data
          .filter((movimentacao: { tipo: string; }) => movimentacao.tipo === 'ENTRADA')
          .reduce((total: any, movimentacao: { valor: any; }) => total + movimentacao.valor, 0);

          this.totalSaida = data
          .filter((movimentacao: { tipo: string; }) => movimentacao.tipo === 'SAIDA')
          .reduce((total: any, movimentacao: { valor: any; }) => total + movimentacao.valor, 0);


          this.movimentacoes = this.gruparMovimentacoesPorCategoria(data);
          console.log(this.movimentacoes)// Adiciona os dados recebidos à variável dataToDisplay
        },
        error: (error) => {
          console.error('Erro ao obter as movimentações:', error);
        }
      })
    )
    .subscribe();
}

gruparMovimentacoesPorCategoria(movimentacoes: any[]): CategoriaAgrupada[] {
  const categoriasAgrupadas: CategoriaAgrupada[] = [];

  // Agrupar as movimentações por categoria
  const movimentacoesPorCategoria = movimentacoes.reduce((acc, movimentacao) => {
    const categoriaDescricao = movimentacao.categoria.descricao;
    if (!acc[categoriaDescricao]) {
      acc[categoriaDescricao] = [];
    }
    acc[categoriaDescricao].push(movimentacao);
    return acc;
  }, {});

  // Criar a estrutura de dados de categorias agrupadas
  for (const categoriaDescricao in movimentacoesPorCategoria) {
    if (movimentacoesPorCategoria.hasOwnProperty(categoriaDescricao)) {
      categoriasAgrupadas.push({
        categoria: { descricao: categoriaDescricao }, // Se desejar, você pode adicionar mais propriedades da categoria aqui
        itens: movimentacoesPorCategoria[categoriaDescricao]
      });
    }
  }

  return categoriasAgrupadas;
}

calcularTotal(itens: any[]): number {
  return itens.reduce((total, movimentacao) => total + movimentacao.valor, 0);
}

  entrar(){
    console.log("Fazendo login...")
    this.usuarioFormulario = this.formulario.getRawValue();
      // this.usuarioService.verificarLogin(this.usuarioFormulario).subscribe(usuario => {
      //   this.usuario = usuario;
      //   if(usuario){
      //     this.lojaService.dadosRotaUsuario = usuario;
      //     this.router.navigate(['area-lojas']);
      //   }else{
      //     this._snackBar.open("Usuário não encontrado", "Fechar");
      //   }
      // });
    }

    formatarMoeda(valor: number): string {
      return  valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    }
}

interface CategoriaAgrupada {
  categoria: any;
  itens: any[];
}
