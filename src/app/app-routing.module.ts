import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./users/user.module').then(m => m.UserModule)
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
