import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';
import { enviroments } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

    private baseUrl = enviroments.baseUrlBackend;

    constructor( private http:HttpClient ) { }
    validate(control: AbstractControl ): Observable<ValidationErrors | null> {
      
        const email = control.value;
        
       return this.http.get<any[]>(`${this.baseUrl}/api/v1/validarEmail?email=${ email }`)
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