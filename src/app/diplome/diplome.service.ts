import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Diplome } from './diplome';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  private baseURL = "http://localhost:8099/api/diplomes";


  constructor(private httpClient: HttpClient) { }

  afficherDiplomesListe(): Observable<Diplome[]>{
    return this.httpClient.get<Diplome[]>(`${this.baseURL}`);
  }

  creeDiplome(diplome: Diplome): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, diplome);
  }

  afficherDiplomeAvecId(diplome_id: number): Observable<Diplome>{
    return this.httpClient.get<Diplome>(`${this.baseURL}/${diplome_id}`);
  }

  modifierDiplome(diplome_id: number, diplome: Diplome): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${diplome_id}`, diplome);
  }

  supprimerDiplome(diplome_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${diplome_id}`);
  }

}

