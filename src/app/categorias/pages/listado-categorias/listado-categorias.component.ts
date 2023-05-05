import { Component } from '@angular/core';
import { Categoria } from '../../interfaces/categoria.interface';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent {

  categorias: Categoria[] = [];
  searchTerm: string = '';

  constructor( private catgService:CategoriasService ){}

  ngOnInit(){
    this.catgService.categorias().subscribe(response => {
      console.log(response);
    })
  }

}
