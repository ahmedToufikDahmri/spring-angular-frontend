import { Mission } from '../mission';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-liste-mission',
  templateUrl: './liste-mission.component.html',
  styleUrls: ['./liste-mission.component.css']
})
export class ListeMissionComponent implements OnInit {

//modifiermissions(arg0: any) {
//throw new Error('Method not implemented.');
//}


missions!: Mission[];

  constructor(private missionService: MissionService,
    private router: Router) { }

  ngOnInit(): void {
     this.afficherMissions();
/* 
     this.missions= [{
      "mission_id":1,
      "nom": "test",
      "prenom":"AAA",
      "genre":"BBBBB",
      "date_naissance":"1995-12-15",
      "telephone":55654654,
      "adresse":"SSSSSS",

      }]; */
  }

  private afficherMissions(){
    this.missionService.afficherMissionsListe().subscribe(data => {
      this.missions = data;
    });
  }


  modifierMission(mission_id: number){
    this.router.navigate(['modifier-mission', mission_id]);
  }

  supprimerMission(mission_id: number){
    this.missionService.supprimerMission(mission_id).subscribe( (data: any) => {
      console.log(data);
      this.afficherMissions();
    })
  }

  afficherMission(mission_id: number){
    this.router.navigate(['afficher-mission', mission_id]);
  }

}
