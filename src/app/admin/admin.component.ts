import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  template: `
    <h3>ADMIN</h3>
    <nav>
      <button class="mdui-btn" routerLink="./" routerLinkActive="mdui-color-purple" [routerLinkActiveOptions]="{exact:true}">
        Dashboard
      </button>
      <button class="mdui-btn" routerLink="./crises" routerLinkActive="mdui-color-purple">Manage Crises</button>
      <button class="mdui-btn" routerLink="./heroes" routerLinkActive="mdui-color-purple">Manage Heroes</button>
      <button class="mdui-btn mdui-color-pink" (click)="logout()" routerLinkActive="mdui-color-pink">logout</button>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AdminComponent {
  message: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['../login']);
    this.setMessage();
  }
}
