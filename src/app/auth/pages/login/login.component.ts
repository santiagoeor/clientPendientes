import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public myForm: FormGroup  = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor( 
    private router:Router,
    private fb: FormBuilder,
    private restService: AuthService
     ){}

     errorMessage!: string;
     loading = false;


  login(){
    // this.router.navigate(['./users']);
    if(this.myForm.invalid){ this.myForm.markAllAsTouched();
    }else{
   const credents = this.myForm.value;
    this.loading = true;
   this.restService.login(credents).subscribe(response => {
    
    // console.log(response);
    this.loading = false;

    if(response){
      localStorage.setItem('token', JSON.stringify(response));
      this.restService.isAuthenticated = true;
      this.router.navigate(['./users']);
    }else{
      this.errorMessage = 'Credenciales inválidas';

    }

   }, error => {
    this.errorMessage = error;
   })

  }

    
  }

}
