import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Compte } from './compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private baseURL = "http://localhost:8099/api/comptes";


  constructor(private httpClient: HttpClient) { }


  
  afficherComptesListe(): Observable<Compte[]>{
    return this.httpClient.get<Compte[]>(`${this.baseURL}`);
  }

  creeCompte(compte: Compte): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, compte);
  }

  afficherCompteAvecId(compte_id: number): Observable<Compte>{
    return this.httpClient.get<Compte>(`${this.baseURL}/${compte_id}`);
  }

  modifierCompte(compte_id: number, compte: Compte): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${compte_id}`, compte);
  }

  supprimerCompte(compte_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${compte_id}`);
  }

}

