import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Curriculum } from './curriculum/curriculum';

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
  {
    path: '**',
    redirectTo: 'curriculum',
  },
];
