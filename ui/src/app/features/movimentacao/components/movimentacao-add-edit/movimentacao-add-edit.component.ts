import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { CategoriaService } from 'src/app/features/categoria/services/categoria.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { buscarPorChave } from '../../services/model/TipoMovimentacao';
import { MovimentacoesService } from '../../services/movimentacoes.service';

@Component({
  selector: 'app-movimentacao-add-edit',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './movimentacao-add-edit.component.html',
  styleUrl: './movimentacao-add-edit.component.scss'
})


export class MovimentacaoAddEditDialogComponent {

  formulario!: FormGroup;
  categorias: any;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _snackBar: MatSnackBar,
    private readonly _categoriaService: CategoriaService,
    private readonly _dialogRef: MatDialogRef<MovimentacaoAddEditDialogComponent>,
    private readonly _movimentacoesService: MovimentacoesService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.getCategorias();

    console.log('this.data')
    console.log(this.data)

    this.formulario.patchValue(this.data);
    console.log(this.formulario)
  }

  inicializarFormulario() {
    this.formulario = this._formBuilder.group({
      id: [],
      descricao: [null, Validators.required],
      valor: [0, Validators.required],
      tipo: [null, Validators.required],
      pago: [false, Validators.required],
      data: [new Date(), Validators.required],
      dataInclusao: [new Date(), Validators.required],
      conta: [null],
      categoria: [null, Validators.required]
    });
  }

  getCategorias(): void {
    this._categoriaService.getCategorias()
      .pipe(
        tap({
          next: (data) => {
            this.categorias = data;
            console.log('this.categorias')// Adiciona os dados recebidos à variável dataToDisplay
            console.log(this.categorias)// Adiciona os dados recebidos à variável dataToDisplay
          },
          error: (error) => {
            console.error('Erro ao obter as movimentações:', error);
          }
        })
      )
      .subscribe();
  }

  compareFunction(o1: any, o2: any) {
    return o1.name == o2.name && o1.id == o2.id;
  }

  salvar() {
    console.log(this.formulario)
    this._movimentacoesService.adicionarMovimentacao(this.formulario.value).subscribe(resultado => {
      console.log(resultado)
      if (resultado) {
        // this._snackBar.open("Movimentação salva", "Fechar", {
        //   duration: 2000,
        //   verticalPosition: 'bottom',
        //   horizontalPosition: 'right',
        //   panelClass: 'notify-successful'
        // });
        this._dialogRef.close();
      }
    });
  }

  cancelar() {
    this._dialogRef.close();
  }

  getTipoMovimentacao() {
    return buscarPorChave(this.formulario.get('tipo')?.value);
  }

  alterarPago(value: boolean) {

  }
}







