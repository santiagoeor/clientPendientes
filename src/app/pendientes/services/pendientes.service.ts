import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PendientesService {

  constructor( private http:HttpClient ) { }

  pendientes():Observable<any>{
    return this.http.get(`https://apilaravel.ventas.fun/api/v1/pendientes`);
  }

  search(termino:string|number):Observable<any>{
    return this.http.get(`https://apilaravel.ventas.fun/api/v1/pendientes/search?search=${termino}`);
  }

}
