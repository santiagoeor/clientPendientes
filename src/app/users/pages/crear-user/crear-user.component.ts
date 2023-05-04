import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent {

  private fileTmp:any;
  loading = false;
  mensaje = false;
  mensajecontent: string = '';


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
    password: ['', [Validators.required]],
    fotoUser: ['', [Validators.required]]
  });

  constructor( 
    private fb: FormBuilder,
    private userService:UserService
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
    // const credent = this.myForm.value.name;
    if (typeof this.fileTmp !== 'undefined') { 
      body.append('name', this.myForm.value.name);
      body.append('email', this.myForm.value.email);
      body.append('password', this.myForm.value.password);
      body.append('fotoUser', this.fileTmp.fileRaw);
      console.log(body);
      this.loading = true;
      this.userService.save(body).subscribe(response => {
        console.log(response.ok);
        this.loading = false;
        this.mensaje = true;
        this.mensajecontent = response.ok;
      })
    }else{
      console.log('data sin imagen');
     }
  }


}
