import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/users.interface';
import { UserService } from '../../services/user.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent {

  // users:User[] = [];
  private fileTmp:any;
  loading = false;
  mensaje = false;
  mensajecontent: string = '';
  users!: User;

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
    password: ['', [Validators.required]],
    fotoUser: ['', [Validators.required]]
  });

  constructor(
    private activateRoute: ActivatedRoute,
    private userService:UserService,
    private router: Router,
    private fb: FormBuilder,
    ){}

    ngOnInit(): void{
      this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.userService.getUserPorId(id))
      )
      .subscribe( (user) => {
        this.users = user;
        this.myForm.controls['name'].setValue(user.name);
        this.myForm.controls['email'].setValue(user.email);
      });
      // .subscribe( user => console.log(user.name));
    }

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

      update(){
        const body = new FormData();
        if(this.myForm.invalid) return;
        // const credent = this.myForm.value.name;
        if (typeof this.fileTmp !== 'undefined') { 
          body.append('name', this.myForm.value.name);
          body.append('email', this.myForm.value.email);
          body.append('password', this.myForm.value.password);
          body.append('fotoUser', this.fileTmp.fileRaw);
          body.append('_method', 'PUT');

          console.log(body);
          this.loading = true;
          this.userService.updateUser(this.users.id,body).subscribe(response => {
            console.log(response.ok);
            this.loading = false;
            this.mensaje = true;
            this.mensajecontent = response.ok;
            this.router.navigate(['./users']);
          })
        }else{
          console.log('data sin imagen');
         }
      }

}
