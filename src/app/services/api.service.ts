import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../envirment/envirment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl; // your Railway backend URL

  constructor(private http: HttpClient) { }

  // Example API call
  getOffers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/offers`);
  }

}
