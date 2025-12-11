import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar-condida',
  standalone: false,
  templateUrl: './navbar-condida.component.html',
  styleUrl: './navbar-condida.component.scss'
})
export class NavbarCondidaComponent {
  constructor (private route : Router) {}

  user : any = this.getUser()

  getUser() {
    const token = localStorage.getItem('token');

    if (!token) return null;

    return jwtDecode(token);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.route.navigate(['']);
  }
}
