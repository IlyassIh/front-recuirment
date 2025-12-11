import { Component } from '@angular/core';
import {jwtDecode} from 'jwt-decode';


@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  user : any = null;

  constructor () {
    this.user = this.getUser()
  }
  getUser() {
    const token = localStorage.getItem("token");
    if (!token) return null;

    return jwtDecode(token);
  }

}
