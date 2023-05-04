import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsersComponent } from './pages/listado-users/listado-users.component';
import { CrearUserComponent } from './pages/crear-user/crear-user.component';
import { EditarUserComponent } from './pages/editar-user/editar-user.component';
import { EliminarUserComponent } from './pages/eliminar-user/eliminar-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listado', component: ListadoUsersComponent },
      {path: 'crearUser', component: CrearUserComponent },
      { path: 'editarUser/:id', component: EditarUserComponent },
      { path: 'eliminarUser/:id', component: EliminarUserComponent },
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
export class UserRoutingModule { }
