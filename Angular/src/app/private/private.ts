import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../misc/auth';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [Header],
  templateUrl: './private.html',
  styleUrls: ['./private.scss'],
})
export class PrivadoComponent {
  constructor(private auth: Auth, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/curriculum']);
  }
}
