import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Type_diplome } from './type_diplome';

@Injectable({
  providedIn: 'root'
})
export class Type_diplomeService {

  private baseURL = "http://localhost:8099/api/type_diplomes";


  constructor(private httpClient: HttpClient) { }

  afficherTypeDiplomesListe(): Observable<Type_diplome[]>{
    return this.httpClient.get<Type_diplome[]>(`${this.baseURL}`);
  }

  creeTypeDiplome(type_diplome: Type_diplome): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, type_diplome);
  }

  afficherTypeDiplomeAvecId(type_diplome_id: number): Observable<Type_diplome>{
    return this.httpClient.get<Type_diplome>(`${this.baseURL}/${type_diplome_id}`);
  }

  modifierTypeDiplome(type_diplome_id: number, type_diplome: Type_diplome): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${type_diplome_id}`, type_diplome);
  }

  supprimerTypeDiplome(type_diplome_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${type_diplome_id}`);
  }

}


export { Type_diplome };
