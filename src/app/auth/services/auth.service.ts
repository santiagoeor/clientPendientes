import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Auth } from "../interfaces/auth.interface";
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated: boolean = false;

  constructor( private http:HttpClient ) { }

  

  login(credents:Auth):Observable<boolean>{
    return this.http.post<any>(`https://apilaravel.ventas.fun/api/v1/login`, credents)
     .pipe(
      catchError(this.handleError)
     );
  }

  logout(){
    return this.http.post('https://apilaravel.ventas.fun/api/v1/logout', {}).subscribe(response => {
      this.isAuthenticated = false;
    });
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ha ocurrido un error:', error.error.message);
    } else {
      console.error(`Código de error: ${error.status}, ` + `mensaje: ${error.message}`);
    }
    return throwError('Verifique sus credenciales.');
  }
}
