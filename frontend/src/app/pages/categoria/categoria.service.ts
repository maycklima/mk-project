import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

constructor(private http: HttpClient) { }

getCategorias(): Observable<any> {
  return this.http.get<any>('http://localhost:8080/categorias');
}

// Exemplo de método para adicionar uma nova movimentação no backend
adicionarMovimentacao(movimentacao: any): Observable<any> {
  return this.http.post<any>('http://localhost:8080/api/categorias', movimentacao);
}

}
