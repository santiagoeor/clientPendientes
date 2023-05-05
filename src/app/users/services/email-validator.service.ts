import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

    constructor( private http:HttpClient ) { }
    validate(control: AbstractControl ): Observable<ValidationErrors | null> {
      
        const email = control.value;
        
       return this.http.get<any[]>(`https://apilaravel.ventas.fun/api/v1/validarEmail?email=${ email }`)
            .pipe(
                map(res => {
                    // console.log(res);
                    return (res.length === 0)
                            ? null
                            : { emailTaken: true }
                })
            );
       
    }
}