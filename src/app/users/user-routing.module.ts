import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsersComponent } from './pages/listado-users/listado-users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listado', component: ListadoUsersComponent },
      { path: '**', redirectTo: 'listado' }
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
