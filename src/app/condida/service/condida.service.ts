import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllOfferResponse } from '../../dto/AllOffersResponse';
import { Apply } from '../../dto/apply';

@Injectable({
  providedIn: 'root'
})
export class CondidaService {

  constructor(private http : HttpClient) { }

  private apiUrl = "http://localhost:3000/";

  allOffers() : Observable<AllOfferResponse> {
    return this.http.get<AllOfferResponse>(`${this.apiUrl}allOffers`);
  }

  apply(apply : Apply) : Observable<Apply> {
    return this.http.post<Apply>(`${this.apiUrl}apply`, apply);
  }

}
