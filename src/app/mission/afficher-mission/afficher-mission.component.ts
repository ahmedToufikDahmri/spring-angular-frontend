import { Component, OnInit } from '@angular/core';
import { Mission } from '../mission';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './afficher-mission.component.html',
  styleUrls: ['./afficher-mission.component.css']
})
export class AfficherMissionComponent implements OnInit {

  mission_id!: number
  mission!: Mission
  constructor(private route: ActivatedRoute, private MissionService: MissionService) { }

  ngOnInit(): void {
    this.mission_id = this.route.snapshot.params['mission_id'];

    this.mission = new Mission();
    this.MissionService.afficherMissionAvecId(this.mission_id).subscribe( data => {
      this.mission = data;
    });
  }

}
