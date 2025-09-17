import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Curriculum } from './curriculum/curriculum';
import { AuthGuard } from './auth-guard';
import { LoginComponent } from './login/login';
import { PrivadoComponent } from './private/private';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'curriculum',
  },
  {
    path: 'curriculum',
    component: Curriculum,
  },
  {
    path: 'form',
    component: Form,
  },
  { path: 'login', component: LoginComponent},
  { path: 'privado', component: PrivadoComponent, canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: 'curriculum',
  },
];
