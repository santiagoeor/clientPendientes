import { Component } from '@angular/core';
import { PendientesService } from '../../services/pendientes.service';
import { Pendientes } from '../../interfaces/pendientes.interface';

@Component({
  selector: 'app-listado-pendientes',
  templateUrl: './listado-pendientes.component.html',
  styleUrls: ['./listado-pendientes.component.css']
})
export class ListadoPendientesComponent {

  pendientes: Pendientes[] = [];
  searchTerm: string = '';
  verifiExistPendientes: boolean = false;
  loading: boolean = false;

  constructor( private pendienteService:PendientesService ){}

  ngOnInit(){
    this.loading = true;
    this.pendienteService.pendientes().subscribe(response => {
      if(response.length === 0){
        this.loading = false;
        this.verifiExistPendientes = true;
      }else{
        // console.log(response);
        this.loading = false;
        this.verifiExistPendientes = false;
        this.pendientes = response;
      }
    })
  }

  onSearch(){
    this.pendienteService.search(this.searchTerm).subscribe(response => {
      this.pendientes = response;
    })
  }

}
