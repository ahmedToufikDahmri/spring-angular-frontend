import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Mission } from './mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private baseURL = "http://localhost:8099/api/missions";


  constructor(private httpClient: HttpClient) { }

  afficherMissionsListe(): Observable<Mission[]>{
    return this.httpClient.get<Mission[]>(`${this.baseURL}`);
  }

  creeMission(mission: Mission): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, mission);
  }

  afficherMissionAvecId(mission_id: number): Observable<Mission>{
    return this.httpClient.get<Mission>(`${this.baseURL}/${mission_id}`);
  }

  modifierMission(mission_id: number, mission: Mission): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${mission_id}`, mission);
  }

  supprimerMission(mission_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${mission_id}`);
  }

}

