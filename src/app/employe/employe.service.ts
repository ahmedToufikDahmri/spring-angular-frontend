import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from './employe';
import { Departement } from '../departement/departement';
import { Compte } from '../compte/compte';

@Injectable({
  providedIn: 'root'
})

export class EmployeService {
  

  private baseURL = "http://localhost:8099/api/employes";


  constructor(private httpClient: HttpClient) { }

  afficherListeEmployes(): Observable<Employe[]>{
    return this.httpClient.get<Employe[]>(`${this.baseURL}`);
  }

  afficherDepartementsListe(): Observable<Departement[]>{
    return this.httpClient.get<Departement[]>(`${this.baseURL}`);
  }
  afficherComptesListe(): Observable<Compte[]>{
    return this.httpClient.get<Compte[]>(`${this.baseURL}`);
  }
  creeEmploye(employe: Employe): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employe);
  }

  afficherEmployeAvecId(employe_id: number): Observable<Employe>{
    return this.httpClient.get<Employe>(`${this.baseURL}/${employe_id}`);
  }

  modifierEmploye(employe_id: number, employe: Employe): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${employe_id}`, employe);
  }

  supprimerEmploye(employe_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${employe_id}`);
  }

}