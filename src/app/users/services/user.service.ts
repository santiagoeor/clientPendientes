import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = enviroments.baseUrlBackend;

  constructor( private http:HttpClient ) { }

  users():Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/users`);
  }

  search(termino:string|number):Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/user/search?search=${termino}`);
  }

  save(data:FormData):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/v1/user`, data);
  }

  getUserPorId(id:string|number): Observable<any>{
    return this.http.get(`${this.baseUrl}/api/v1/user/${id}`);
  }

  updateUser(id:string|number, data:FormData): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/v1/user/${id}`, data);
  }

  deleteUser(id:string|number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/api/v1/user/${id}`);
  }

}
