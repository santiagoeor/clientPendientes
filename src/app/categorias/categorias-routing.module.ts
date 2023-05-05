import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCategoriasComponent } from './pages/listado-categorias/listado-categorias.component';
import { CrearCategoriaComponent } from './pages/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './pages/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './pages/eliminar-categoria/eliminar-categoria.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listado', component: ListadoCategoriasComponent },
      {path: 'crearCategoria', component: CrearCategoriaComponent },
      { path: 'editarCategoria/:id', component: EditarCategoriaComponent },
      { path: 'eliminarCategoria/:id', component: EliminarCategoriaComponent },
      { path: '**', redirectTo: 'listado' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriasRoutingModule { }
