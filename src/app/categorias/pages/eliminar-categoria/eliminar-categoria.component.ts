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
  mensaje: boolean = false;

  public mensajecontent!: string;

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
    this.categoriaService.deleteCategoria(this.categori.catg).subscribe({
      next: (response) => {
      this.loading = false;
      this.router.navigate(['/categorias']);
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
