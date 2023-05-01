import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPendienteComponent } from './pages/crear-pendiente/crear-pendiente.component';
import { EditarPendienteComponent } from './pages/editar-pendiente/editar-pendiente.component';
import { EliminarPendienteComponent } from './pages/eliminar-pendiente/eliminar-pendiente.component';
import { ListadoPendientesComponent } from './pages/listado-pendientes/listado-pendientes.component';



@NgModule({
  declarations: [
    CrearPendienteComponent,
    EditarPendienteComponent,
    EliminarPendienteComponent,
    ListadoPendientesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PendienteModule { }
