import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if(!token) {
    router.navigate(['login']);
    return false;
  }

  const user : any = jwtDecode(token);
  if(user.role?.toLowerCase() !== 'admin') {
    return router.navigate(['/login']);
  }
  return true;
};
