import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

constructor(private http: HttpClient) { }

getAtividades(atividadeFilter: any): Observable<any> {
  console.log(atividadeFilter)
  return this.http.get<any>('http://localhost:8080/atividade/atividadeBy', { params: this.prepareGetRequest(atividadeFilter) });
}

// Exemplo de método para adicionar uma nova movimentação no backend
adicionarAtividade(atividade: any): Observable<any> {
  return this.http.post<any>('http://localhost:8080/atividade', atividade);
}

atualizarAtividade(atividade: any): Observable<any[]> {
  return this.http.put<any[]>('http://localhost:8080/atividade', atividade);
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
