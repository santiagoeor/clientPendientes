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
  verifiExistCategor: boolean = false;
  loading: boolean = false;

  constructor(private catgService: CategoriasService) { }

  ngOnInit() {
    this.loading = true;
    this.catgService.categorias().subscribe(response => {
      // console.log(response);
      if (response.length === 0) {
        this.loading = false;
        this.verifiExistCategor = true;
      } else {
        this.loading = false;
        this.verifiExistCategor = false;
        this.categorias = response;
      }

    })
  }

  onSearch() {
    this.catgService.search(this.searchTerm).subscribe(response => {
      this.categorias = response;
    })
  }

}
