import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

constructor(private readonly http: HttpClient) { }

getCategorias(): Observable<any> {
  return this.http.get<any>('/categorias');
}

// Exemplo de método para adicionar uma nova movimentação no backend
adicionarMovimentacao(movimentacao: any): Observable<any> {
  return this.http.post<any>('/api/categorias', movimentacao);
}

}
