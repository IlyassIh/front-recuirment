import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyResponse } from '../../dto/CompanyResponse';
import { Company } from '../../dto/Company';
import { Offer } from '../../dto/Offer';
import { AllOfferResponse } from '../../dto/AllOffersResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:3000/";

  companiesUser(): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${this.apiUrl}allCompanies`);
  }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.apiUrl}createCompany`, company);
  }

  createOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(`${this.apiUrl}createOffre`, offer);
  }

  myOffers(): Observable<AllOfferResponse> {
    return this.http.get<AllOfferResponse>(`${this.apiUrl}allOffersUser`);
  }

  applies(): Observable<any> {
    return this.http.get(`${this.apiUrl}applies`);
  }

  viewOffer(offerId: string): Observable<{ data: Offer }> {
  return this.http.get<{ data: Offer }>(`${this.apiUrl}viewOffer/${offerId}`);
}

}
