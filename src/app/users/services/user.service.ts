import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient ) { }

  users():Observable<any>{
    return this.http.get(`https://apilaravel.ventas.fun/api/v1/users`);
  }

  search(termino:string|number):Observable<any>{
    return this.http.get(`https://apilaravel.ventas.fun/api/v1/user/search?search=${termino}`);
  }

  save(data:FormData):Observable<any>{
    return this.http.post(`https://apilaravel.ventas.fun/api/v1/user`, data);
  }

  getUserPorId(id:string|number): Observable<any>{
    return this.http.get(`https://apilaravel.ventas.fun/api/v1/user/${id}`);
  }

  updateUser(id:string|number, data:FormData): Observable<any>{
    return this.http.post(`https://apilaravel.ventas.fun/api/v1/user/${id}`, data);
  }

  deleteUser(id:string|number): Observable<any>{
    return this.http.delete(`https://apilaravel.ventas.fun/api/v1/user/${id}`);
  }

}
