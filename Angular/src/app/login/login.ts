import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../misc/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
})
export class LoginComponent {
  constructor(private auth: Auth, private router: Router) {}

  login() {
    this.auth.login();
    this.router.navigate(['/curriculum']); // 👈 después del login te lleva al privado
  }
}
