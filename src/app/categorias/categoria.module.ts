import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearCategoriaComponent } from './pages/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './pages/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './pages/eliminar-categoria/eliminar-categoria.component';
import { ListadoCategoriasComponent } from './pages/listado-categorias/listado-categorias.component';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    EliminarCategoriaComponent,
    ListadoCategoriasComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriaModule { }
