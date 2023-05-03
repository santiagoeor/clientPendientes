import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/users.interface';



@Component({
  selector: 'app-listado-users',
  templateUrl: './listado-users.component.html',
  styleUrls: ['./listado-users.component.css']
})
export class ListadoUsersComponent {

  users: User[] = [];
  searchTerm: string = '';

  constructor( 
    private restService: UserService,
     ){}


  ngOnInit(): void{

    this.restService.users().subscribe(response => {
      this.users = response.data;
    })
    const tokenOb = localStorage.getItem('token'); // obtiene el token JWT desde el almacenamiento local
    const token = JSON.parse(tokenOb!);
    console.log(token.user_id);

  }

  onSearch(){
    this.restService.search(this.searchTerm).subscribe(response => {
          this.users = response;
          console.log(response);
        })
  }

}
