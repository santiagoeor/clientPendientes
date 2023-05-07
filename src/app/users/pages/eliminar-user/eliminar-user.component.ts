import { Component } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-eliminar-user',
  templateUrl: './eliminar-user.component.html',
  styleUrls: ['./eliminar-user.component.css']
})
export class EliminarUserComponent {

  loading:boolean = false;
  users!: User;
  mensaje: boolean = false;

  public mensajecontent!: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private userService:UserService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.userService.getUserPorId(id))
    )
    .subscribe( (user) => {
      this.users = user;
    });
  }

  deleteUser(){
    this.loading = true;
    this.userService.deleteUser(this.users.id).subscribe({
      next:(response) => {
      this.loading = false;
      this.router.navigate(['./users']);
    },
    error: (err) => {
      console.log(err);
      this.loading = false;
      this.mensaje = true;
      this.mensajecontent = 'Su sesion a expirado o no tienes conexion a internet';
    }
  })
  }

}
