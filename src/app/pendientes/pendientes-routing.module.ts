import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPendientesComponent } from './pages/listado-pendientes/listado-pendientes.component';
import { CrearPendienteComponent } from './pages/crear-pendiente/crear-pendiente.component';
import { EditarPendienteComponent } from './pages/editar-pendiente/editar-pendiente.component';
import { EliminarPendienteComponent } from './pages/eliminar-pendiente/eliminar-pendiente.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listado', component: ListadoPendientesComponent },
      {path: 'crearPendiente', component: CrearPendienteComponent },
      { path: 'editarPendiente/:id', component: EditarPendienteComponent },
      { path: 'eliminarPendiente/:id', component: EliminarPendienteComponent },
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
export class PendientesRoutingModule { }
