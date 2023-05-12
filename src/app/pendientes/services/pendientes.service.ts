import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PendientesService {

  private baseUrl = enviroments.baseUrlBackend;

  constructor( private http:HttpClient ) { }

  pendientes():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/pendientes`);
  }

  search(termino:string|number):Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/pendientes/search?search=${termino}`);
  }

  save(data:string|number):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/v1/pendientes`, data);
  }

  getPendientesPorId(id:string|number):Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/pendientes/${id}`); 
  }

  update(id:string|number, data:string|number):Observable<any>{
    return this.http.put(`${this.baseUrl}/api/v1/pendientes/${id}`, data); 
  }

  delete(id:string|number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/api/v1/pendientes/${id}`); 
  }

}
