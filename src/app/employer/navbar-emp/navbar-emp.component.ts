import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from '../../dto/UserResponse';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar-emp',
  standalone: false,
  templateUrl: './navbar-emp.component.html',
  styleUrl: './navbar-emp.component.scss'
})
export class NavbarEmpComponent {
  constructor(private router: Router) { }

  user : any = this.getUser();

  getUser() {
    const token = localStorage.getItem('token');
    if(!token) return null;

    return jwtDecode(token);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['welcome'])
  }
}
