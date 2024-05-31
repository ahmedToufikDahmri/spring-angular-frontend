import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Departement } from './departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private baseURL = "http://localhost:8099/api/departements";


  constructor(private httpClient: HttpClient) { }

  afficherDepartementsListe(): Observable<Departement[]>{
    return this.httpClient.get<Departement[]>(`${this.baseURL}`);
  }

  creeDepartement(departement: Departement): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, departement);
  }

  afficherDepartementAvecId(departement_id: number): Observable<Departement>{
    return this.httpClient.get<Departement>(`${this.baseURL}/${departement_id}`);
  }

  modifierDepartement(departement_id: number, departement: Departement): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${departement_id}`, departement);
  }

  supprimerDepartement(departement_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${departement_id}`);
  }

}

