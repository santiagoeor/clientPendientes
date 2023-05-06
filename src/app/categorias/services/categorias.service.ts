import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor( private http:HttpClient ) { }

  categorias():Observable<any>{
    return this.http.get(`https://apilaravel.ventas.fun/api/v1/categorias`);
  }

  search(termino:string|number):Observable<any>{
    return this.http.get(`https://apilaravel.ventas.fun/api/v1/categorias/search?search=${termino}`);
  }

  save(data:string):Observable<any>{
    return this.http.post(`https://apilaravel.ventas.fun/api/v1/categorias`, data);
  }

  getCategoriaPorId(id:string|number):Observable<any>{
    return this.http.get(`https://apilaravel.ventas.fun/api/v1/categorias/${id}`);
  }

  update(id:string|number, data:string):Observable<any>{
    return this.http.put(`https://apilaravel.ventas.fun/api/v1/categorias/${id}`, data);
  }


}
