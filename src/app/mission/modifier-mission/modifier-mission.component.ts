import { MissionService } from '../mission.service';
import { Component, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifier-mission',
  templateUrl: './modifier-mission.component.html',
  styleUrls: ['./modifier-mission.component.css']
})

export class ModifierMissionComponent implements OnInit {

    mission_id!: number;
    mission: Mission = new Mission();
    constructor(private missionService: MissionService,
      private route: ActivatedRoute,
      private router: Router) { }

    ngOnInit(): void {
      this.mission_id = this.route.snapshot.params['mission_id'];

      this.missionService.afficherMissionAvecId(this.mission_id).subscribe(data => {
        this.mission = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.missionService.modifierMission(this.mission_id, this.mission).subscribe( data =>{
        this.goToMissionList();
      }
      , error => console.log(error));
    }

    goToMissionList(){
      this.router.navigate(['/missions']);
    }

}
