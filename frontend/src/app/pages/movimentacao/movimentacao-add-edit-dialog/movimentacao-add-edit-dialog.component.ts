import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../categoria/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovimentacoesService } from '../movimentacoes/movimentacoes.service';

@Component({
  selector: 'app-movimentacao-add-edit-dialog',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './movimentacao-add-edit-dialog.component.html',
  styleUrl: './movimentacao-add-edit-dialog.component.scss'
})


export class MovimentacaoAddEditDialogComponent {

  @Output() movimentacaoAdicionadaEmit = new EventEmitter<string>();


  formulario!: FormGroup;
  categorias: any;

  constructor(
    private _formBuilder: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _categoriaService: CategoriaService,
    private _dialogRef: MatDialogRef<MovimentacaoAddEditDialogComponent>,
    private _movimentacoesService: MovimentacoesService,
    @Inject(MAT_DIALOG_DATA) public data: any){}
  
    ngOnInit() {
    this.inicializarFormulario();
    this.getCategorias();

    this.formulario.patchValue(this.data);
    console.log(this.formulario)
    }

    inicializarFormulario(){
      this.formulario = this._formBuilder.group({
        id: [],
        descricao:[null, Validators.required],
        valor: [0, Validators.required],
        tipo: ['ENTRADA', Validators.required],
        pago: [false, Validators.required],
        data: [new Date(), Validators.required],
        dataInclusao: [new Date(), Validators.required],
        conta:[null],
        categoria: [null, Validators.required]
      });
    }

    getCategorias(): void {
      this._categoriaService.getCategorias()
        .pipe(
          tap({
            next: (data) => {
              this.categorias = data;
              console.log(this.categorias)// Adiciona os dados recebidos à variável dataToDisplay
            },
            error: (error) => {
              console.error('Erro ao obter as movimentações:', error);
            }
          })
        )
        .subscribe();
    }

    salvar(){
      console.log(this.formulario)
      this._movimentacoesService.adicionarMovimentacao(this.formulario.value).subscribe(resultado => {
        console.log(resultado)
        if(resultado){
          this._snackBar.open("Movimentação adicionada com sucesso!", "Fechar", {
            duration: 2000,
            verticalPosition: 'bottom',
            panelClass: 'notify-successful'
        });
          this._dialogRef.close();
        }
      });
    }

    cancelar(){
      this._dialogRef.close();
    }
}


  




