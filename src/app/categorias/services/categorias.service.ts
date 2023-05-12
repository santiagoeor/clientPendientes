import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private baseUrl = enviroments.baseUrlBackend;

  constructor( private http:HttpClient ) { }

  categorias():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/categorias`);
  }

  search(termino:string|number):Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/categorias/search?search=${termino}`);
  }

  save(data:string):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/v1/categorias`, data);
  }

  getCategoriaPorId(id:string|number):Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/categorias/${id}`);
  }

  update(id:string|number, data:string):Observable<any>{
    return this.http.put(`${this.baseUrl}/api/v1/categorias/${id}`, data);
  }

  deleteCategoria(id:string|number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/api/v1/categorias/${id}`);
  }


}
