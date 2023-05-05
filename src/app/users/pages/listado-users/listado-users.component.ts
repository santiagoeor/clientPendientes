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
  verifiExistUsers: boolean = false;
  loading: boolean = false;

  constructor( 
    private restService: UserService,
     ){}


  ngOnInit(): void{
    this.loading = true;
    this.restService.users().subscribe(response => {

      if(response.data.length === 0){
        this.loading = false;
        this.verifiExistUsers = true;
      }else{
        this.loading = false;
        this.verifiExistUsers = false;
        this.users = response.data;
      }
      
    })

  }

  onSearch(){
    this.restService.search(this.searchTerm).subscribe(response => {
          this.users = response;
          // console.log(response);
        })
  }

}
