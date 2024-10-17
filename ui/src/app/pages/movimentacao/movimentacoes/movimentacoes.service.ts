import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimentacoesService {

constructor(private readonly http: HttpClient) { }

getMovimentacoes(movimentacaoFilter: any): Observable<any> {
  console.log(movimentacaoFilter)
  return this.http.get<any>('/movimentacao/movimentacaoBy', { params: this.prepareGetRequest(movimentacaoFilter) });
}

// Exemplo de método para adicionar uma nova movimentação no backend
adicionarMovimentacao(movimentacao: any): Observable<any> {
  return this.http.post<any>('/movimentacao', movimentacao);
}

atualizarMovimentacao(movimentacao: any): Observable<any[]> {
  return this.http.put<any[]>('/movimentacao', movimentacao);
}

prepareGetRequest(formValue: any): any {
  for (const k in formValue) {
      const valueField = formValue[k];
      if (valueField instanceof Date) {
          continue;
      }
      if (valueField.id) {
          formValue[k] = valueField.id;
      } else if (typeof valueField === 'object') {
          this.prepareGetRequest(valueField);
      }
  }
  return formValue;
}

dateToIsoStr(value: Date) {
  if (!value) {
      return '';
  }
  return new DatePipe('pt-BR').transform(value, 'yyyy-MM-dd');
}

}
