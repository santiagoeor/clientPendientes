import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../interfaces/categoria.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-eliminar-categoria',
  templateUrl: './eliminar-categoria.component.html',
  styleUrls: ['./eliminar-categoria.component.css']
})
export class EliminarCategoriaComponent {

  loading:boolean = false;
  categori!: Categoria;

  constructor( 
    private activateRoute: ActivatedRoute,
    private categoriaService:CategoriasService,
    private router: Router
   ){}

   ngOnInit():void{
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.categoriaService.getCategoriaPorId(id))
    )
    .subscribe((categor) => {
      this.categori = categor;
    })
  }

  deleteCategoria(){
    this.loading = true;
    this.categoriaService.deleteCategoria(this.categori.catg).subscribe(response => {
      console.log(response);
      this.loading = false;
      this.router.navigate(['/categorias']);
    })

  }

}
