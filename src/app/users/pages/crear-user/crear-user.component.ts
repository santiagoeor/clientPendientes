import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { EmailValidator } from '../../services/email-validator.service';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent {

  private fileTmp:any;
  loading:boolean = false;
  mensaje:boolean = false;
  mensajecontent: string = '';


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.minLength(3), Validators.email], [this.emailValidator]],
    password: ['', [Validators.required]],
    fotoUser: ['', [Validators.required]]
  });

  constructor( 
    private fb: FormBuilder,
    private userService:UserService,
    private emailValidator:EmailValidator
     ){}

  getFile($event: any){

    // console.log($event);
        const [ file ] = $event.target.files;
        // this.fileTmp = file;
        this.fileTmp = {
          fileRaw:file,
          fileName:file.name
        }

        // console.log(this.fileTmp);
      
    
      }

  save(){
    const body = new FormData();
    if(this.myForm.invalid) this.myForm.markAllAsTouched();
    if(this.myForm.controls['email'].getError('emailTaken')) {
      // console.log('existe');
    }else{
    // const credent = this.myForm.value.name;
    if (typeof this.fileTmp !== 'undefined') { 
      body.append('name', this.myForm.value.name);
      body.append('email', this.myForm.value.email);
      body.append('password', this.myForm.value.password);
      body.append('fotoUser', this.fileTmp.fileRaw);
      console.log(body);
      this.loading = true;
      this.userService.save(body).subscribe({
        next:(response) => {
        // console.log(response.ok);
        this.loading = false;
        this.mensaje = true;
        this.mensajecontent = response.ok;   
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.mensaje = true;
        this.mensajecontent = 'Su sesion a expirado o no tienes conexion a internet';
      }
    })
    }else{
      console.log('data sin imagen');
     }

    }


  }


}
