import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const employerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem("token");
  if(!token) {
    router.navigate(['welcome']);
    return false
  }

  const user : any = jwtDecode(token);

  if(user.role.toLowerCase() !== 'employeur') {
    router.navigate(['login']);
    return false
  }
  return true;
};
