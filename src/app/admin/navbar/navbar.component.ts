import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  user : any = null;
  constructor(private route : Router) {
    this.user = this.getUser();
  }

  getUser () {
    const token = localStorage.getItem("token");
    if(!token) return null;

    return jwtDecode(token)
  }
  logout () {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.route.navigate(['']);

  }
}
