import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  conexion!: boolean;

  ngOnInit(){
    fromEvent(window, 'offline').pipe(
      debounceTime(100)).subscribe((event: Event)=> {
        console.log(event);
        this.conexion = true;
      });

    fromEvent(window, 'online').pipe(
      debounceTime(100)).subscribe((event: Event)=> {
        console.log(event);
        this.conexion = false;
      });
  }

  constructor( 
    private authservice:AuthService,
    private router:Router 
    ){}
  
    logout(){
    localStorage.removeItem('token');
    this.authservice.logout();
    this.router.navigate(['./login']);
  }
}
