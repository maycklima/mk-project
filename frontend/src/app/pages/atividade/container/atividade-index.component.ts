import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../../shared/material.module';
import { AtividadeService } from './atividade-index.service';
import { AtividadeAddEditDialogComponent } from '../atividade-add-edit-dialog/atividade-add-edit-dialog.component';

@Component({
  selector: 'app-atividade-index',
  standalone: true,
  templateUrl: './atividade-index.component.html',
  styleUrls: ['./atividade-index.component.scss'],
  imports: [MaterialModule, CommonModule]
})

export class AtividadeIndexComponent implements OnInit {


  formulario!: FormGroup;
  usuario: any;
  lojas:any;
  usuarioFormulario: any;
  atividades: any;
  dataAtual: Date = new Date();
  nomeMes: any;
  ano: any;

  constructor(
  private router: Router,
  private _formBuilder: FormBuilder, 
  private _snackBar: MatSnackBar,
  private _atividadeService: AtividadeService,
  public dialog: MatDialog){}

  ngOnInit() {
  this.inicializarFormulario();
  this.getAtividades();
  }
  
  inicializarFormulario(){
    this.formulario = this._formBuilder.group({
      usuario: ['mayck'],
    });
  }

  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, atividade:any): void {
    const dialogRef = this.dialog.open(AtividadeAddEditDialogComponent, {
      width: '520px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: atividade 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAtividades();
    });
  }

  testeClick(atividade:any) {
   console.log(atividade)
   console.log(atividade)

   atividade.feito = !atividade.feito

   this._atividadeService.atualizarAtividade(atividade).subscribe(resultado => {
    console.log(resultado)
    if(resultado){
      this._snackBar.open("Item atualizado com sucesso!", "Fechar", {
        duration: 2000,
        verticalPosition: 'bottom',
        panelClass: 'notify-successful'
    });
    }

    this.getAtividades();
  });
  }
  

getAtividades(): void {
  const nomeMesCompleto = this.dataAtual.toLocaleString('pt-BR', { month: 'long' });
  this.nomeMes = nomeMesCompleto.charAt(0).toUpperCase() + nomeMesCompleto.slice(1);
  this.ano = this.dataAtual.getFullYear();

  console.log('this.dataAtual')
  console.log( this.dataAtual)
  let atividadeFilter = {mes: (this.dataAtual.getMonth() + 1).toString(), ano: this.ano.toString(), ordeBy: 'ASC'}
  this._atividadeService.getAtividades(atividadeFilter)
    .pipe(
      tap({
        next: (data) => {
          console.log(data);
          this.atividades = this.gruparAtividadesPorCategoria(data);
          console.log(this.atividades)// Adiciona os dados recebidos à variável dataToDisplay
        },
        error: (error) => {
          console.error('Erro ao obter as atividades:', error);
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
  this.getAtividades();
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
  this.getAtividades();
}

gruparAtividadesPorCategoria(movimentacoes: any[]): CategoriaAgrupada[] {
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

getExisteAtividades(){
 return this.atividades.length === 0
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
}

interface CategoriaAgrupada {
  categoria: any;
  itens: any[];
}
