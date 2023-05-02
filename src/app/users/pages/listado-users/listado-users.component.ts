import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/users.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listado-users',
  templateUrl: './listado-users.component.html',
  styleUrls: ['./listado-users.component.css']
})
export class ListadoUsersComponent {

  users: User[] = [];

  constructor( 
    private restService: UserService,
    private router:Router
     ){}
 
  logaut(){
    this.router.navigate(['./login']);
  }

  ngOnInit(): void{

    this.restService.users().subscribe(response => {
      this.users = response.data;
    })

  }

}
