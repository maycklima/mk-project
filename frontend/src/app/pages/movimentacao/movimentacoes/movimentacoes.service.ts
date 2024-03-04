import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimentacoesService {

constructor(private http: HttpClient) { }

getMovimentacoes(): Observable<any> {
  return this.http.get<any>('http://localhost:8080/movimentacao');
}

// Exemplo de método para adicionar uma nova movimentação no backend
adicionarMovimentacao(movimentacao: any): Observable<any> {
  return this.http.post<any>('http://localhost:8080/movimentacao', movimentacao);
}

}
