import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../dto/User';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../dto/LoginResponse';
import { AllUsersResponse } from '../../dto/AllUsersResponse';
import { CompanyResponse } from '../../dto/CompanyResponse';
import { AllOfferResponse } from '../../dto/AllOffersResponse';
import { Offer } from '../../dto/Offer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  private apiUrl = "https://backend-reqcuirement-production.up.railway.app/admin/";

  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}login`, user);
  }

  showUsers(): Observable<AllUsersResponse> {
    return this.http.get<AllUsersResponse>(`${this.apiUrl}ShowUsers`);
  }

  showEmployers(): Observable<AllUsersResponse> {
    return this.http.get<AllUsersResponse>(`${this.apiUrl}showEmps`);
  }

  allCompanies(): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${this.apiUrl}allCompanies`);
  }

  reviewOffers(): Observable<AllOfferResponse>{
    return this.http.get<AllOfferResponse>(`${this.apiUrl}allOffers`)
  }

  acceptOffer(id: string){
    return this.http.put<AllOfferResponse>(`${this.apiUrl}acceptOffre`, {offreId : id});
  }

  rejectOffer(id: string){
    return this.http.delete<AllOfferResponse>(`${this.apiUrl}deleteOffre`, {body : {offreId : id}});
  }

  allOffers(): Observable<AllOfferResponse> {
    return this.http.get<AllOfferResponse>(`${this.apiUrl}allOffersAccepted`);
  }

  allRoles() :Observable<any> {
    return this.http.get(`${this.apiUrl}showRoles`);
  }

  addRole(role: {role : string} ): Observable<any> {
    return this.http.post(`${this.apiUrl}addRole`, role);
  }

  deleteRole(id: string) : Observable<any> {
    return this.http.delete(`${this.apiUrl}deleteRole`, {body: {roleId: id}});
  }

  allSecteur() : Observable<any> {
    return this.http.get(`${this.apiUrl}showSecteurs`);
  }

  addSector(sector : {secteur : string } ): Observable <any> {
    return this.http.post(`${this.apiUrl}addSecteur`, sector);
  }

  deleteSector(id: string) : Observable<any> {
    return this.http.delete(`${this.apiUrl}deleteSecteur`, {body: {secteurId: id}});
  }

  allContract() : Observable<any> {
    return this.http.get(`${this.apiUrl}showContrats`);
  }

  addContract(contract : {typeContrat : string } ): Observable <any> {
    return this.http.post(`${this.apiUrl}addContrat`, contract);
  }

  deleteContract(id: string) : Observable<any> {
    return this.http.delete(`${this.apiUrl}deleteContrat`, {body: {contratId: id}});
  }

  updateProfile(data: any) : Observable<any> {
    return this.http.put(`${this.apiUrl}updateProfile`, data);
  }
}
