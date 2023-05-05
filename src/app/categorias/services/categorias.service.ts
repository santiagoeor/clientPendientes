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

}
