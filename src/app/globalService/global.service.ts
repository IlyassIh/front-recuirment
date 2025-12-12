import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolesResponse } from '../dto/RolesResponse';
import { User } from '../dto/User';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  private apiUrl = "https://backend-reqcuirement-production.up.railway.app/admin/";

  allRoles () : Observable<RolesResponse>{
    return this.http.get<RolesResponse>(`${this.apiUrl}showRoles`);
  }

  register(user: User) : Observable<User> {
    return this.http.post<User>(`${this.apiUrl}register`, user);
  }
}
