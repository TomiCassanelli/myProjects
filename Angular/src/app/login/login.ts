import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../misc/auth';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Header],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  constructor(private auth: Auth, private router: Router) {}

  login() {
    this.auth.login();
    this.router.navigate(['/curriculum']);
  }
}