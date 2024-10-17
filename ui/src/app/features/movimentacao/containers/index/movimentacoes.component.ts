import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { MaterialModule } from 'src/app/shared/material.module';
import { MovimentacaoAddEditDialogComponent } from '../../components/movimentacao-add-edit-dialog/movimentacao-add-edit-dialog.component';
import { MovimentacoesService } from '../../services/movimentacoes.service';

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
  totalEntradaPago: any;
  totalSaidaPago: any;
  dataAtual: Date = new Date();
  nomeMes: any;
  ano: any;

  constructor(
  private readonly router: Router,
  private readonly _formBuilder: FormBuilder, 
  private readonly _snackBar: MatSnackBar,
  private readonly _movimentacoesService: MovimentacoesService,
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

  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, movimentacao:any): void {
    const dialogRef = this.dialog.open(MovimentacaoAddEditDialogComponent, {
      width: '520px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: movimentacao 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getMovimentacoes();
    });
  }

  testeClick(movimentacao:any) {
   console.log(movimentacao)
   console.log(movimentacao)

   movimentacao.pago = !movimentacao.pago

   this._movimentacoesService.atualizarMovimentacao(movimentacao).subscribe(resultado => {
    console.log(resultado)
    if(resultado){
      this._snackBar.open("Item atualizado com sucesso!", "Fechar", {
        duration: 2000,
        verticalPosition: 'bottom',
        panelClass: 'notify-successful'
    });
    }

    this.getMovimentacoes();
  });
  }
  

getMovimentacoes(): void {
  const nomeMesCompleto = this.dataAtual.toLocaleString('pt-BR', { month: 'long' });
  this.nomeMes = nomeMesCompleto.charAt(0).toUpperCase() + nomeMesCompleto.slice(1);
  this.ano = this.dataAtual.getFullYear();

  console.log('this.dataAtual')
  console.log( this.dataAtual)
  let movimentacaoFilter = {mesMovimentacao: (this.dataAtual.getMonth() + 1).toString(), anoMovimentacao: this.ano.toString(), ordeBy: 'ASC'}
  this._movimentacoesService.getMovimentacoes(movimentacaoFilter)
    .pipe(
      tap({
        next: (data) => {
          console.log(data);
          this.totalEntrada = data
          .filter((movimentacao: { tipo: string;}) => movimentacao.tipo === 'ENTRADA')
          .reduce((total: any, movimentacao: { valor: any; }) => total + movimentacao.valor, 0);

          this.totalEntradaPago = data
          .filter((movimentacao: { tipo: string; pago:boolean }) => movimentacao.tipo === 'ENTRADA' && movimentacao.pago === true)
          .reduce((total: any, movimentacao: { valor: any; }) => total + movimentacao.valor, 0);

          this.totalSaida = data
          .filter((movimentacao: { tipo: string; }) => movimentacao.tipo === 'SAIDA')
          .reduce((total: any, movimentacao: { valor: any; }) => total + movimentacao.valor, 0);

          this.totalSaidaPago = data
          .filter((movimentacao: { tipo: string; pago:boolean  }) => movimentacao.tipo === 'SAIDA' && movimentacao.pago === true)
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

proximoMes(){
  let nextMes = new Date(this.dataAtual);
  this.dataAtual.setMonth(nextMes.getMonth() + 1);
  this.atualizaNomeMes(this.dataAtual);
  this.atualizaAno(this.dataAtual);
  console.log(this.dataAtual)
  this.getMovimentacoes();
}

atualizaNomeMes(data: Date) {
  this.nomeMes = data.toLocaleString('pt-BR', { month: 'long' }).charAt(0).toUpperCase() + data.toLocaleString('pt-BR', { month: 'long' }).slice(1);
}

atualizaAno(data: Date) {
  this.ano = data.getFullYear();
}

mesAnterior(){
  let nextMes = new Date(this.dataAtual);
  this.dataAtual.setMonth(nextMes.getMonth() - 1);
  this.atualizaNomeMes(this.dataAtual);
  this.atualizaAno(this.dataAtual);
  this.getMovimentacoes();
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

getExisteMovimentacoes(){
 return this.movimentacoes.length === 0
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
