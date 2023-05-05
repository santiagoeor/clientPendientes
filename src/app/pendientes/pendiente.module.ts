import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPendienteComponent } from './pages/crear-pendiente/crear-pendiente.component';
import { EditarPendienteComponent } from './pages/editar-pendiente/editar-pendiente.component';
import { EliminarPendienteComponent } from './pages/eliminar-pendiente/eliminar-pendiente.component';
import { ListadoPendientesComponent } from './pages/listado-pendientes/listado-pendientes.component';
import { PendientesRoutingModule } from './pendientes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearPendienteComponent,
    EditarPendienteComponent,
    EliminarPendienteComponent,
    ListadoPendientesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PendientesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PendienteModule { }
