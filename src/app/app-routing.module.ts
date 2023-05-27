import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./users/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pendientes',
    loadChildren: () => import('./pendientes/pendiente.module').then(m => m.PendienteModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categoria.module').then(m => m.CategoriaModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
