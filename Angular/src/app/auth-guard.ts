import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from './auth';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isLogged()) {
      return true; // deja pasar
    }
    alert('Necesitás iniciar sesión para acceder a esta página.');

    this.router.navigate(['/login']); // redirige si no está logueado
    return false;
  }
}
