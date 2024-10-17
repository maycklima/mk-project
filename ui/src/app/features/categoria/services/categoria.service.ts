import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

constructor(private readonly http: HttpClient) { }

  getCategorias(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/categorias`);
  }
}
