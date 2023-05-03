import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUserComponent } from './pages/crear-user/crear-user.component';
import { EditarUserComponent } from './pages/editar-user/editar-user.component';
import { EliminarUserComponent } from './pages/eliminar-user/eliminar-user.component';
import { ListadoUsersComponent } from './pages/listado-users/listado-users.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    CrearUserComponent,
    EditarUserComponent,
    EliminarUserComponent,
    ListadoUsersComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
