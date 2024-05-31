import { Router } from '@angular/router';
import { MissionService } from '../mission.service';
import { Mission } from '../mission';
import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/employe/employe.service';
import { Employe } from 'src/app/employe/employe';
import {NgFor} from '@angular/common';
import { CompteService } from 'src/app/compte/compte.service';
import { Compte } from 'src/app/compte/compte';

@Component({
  selector: 'app-cree-mission',
  templateUrl: './cree-mission.component.html',
  styleUrls: ['./cree-mission.component.css']
})
export class CreeMissionComponent implements OnInit {

  mission: Mission = new Mission();
  departements: any;
  constructor(private missionService: MissionService, private compteService: CompteService, private employeService: EmployeService,
    private router: Router) { }

    employes!: Employe[];
    comptes!: Compte[];

  ngOnInit(): void {
   this.afficherEmployes();
   this.afficherComptes();

  }
  
  private afficherComptes(){
    this.compteService.afficherComptesListe().subscribe(data => {
      this.comptes = data;
    });
  }

  private afficherEmployes(){
    this.employeService.afficherListeEmployes().subscribe(data => {
      this.employes = data;
    });
  }
  
  enregistrerMission(){
    this.missionService.creeMission(this.mission).subscribe(data =>{
      console.log(data);

      // this.employeService.afficherEmployesListe().subscribe(data => {
      //   this.employes = data;
      // });

      this.versMissionList();
    },
      error => console.log(error));
  }

  versMissionList(){
    this.router.navigate(['/missions']);
  }

  onSubmit(){
    console.log(this.mission);
    this.enregistrerMission();
  }
  refresh(): void {
    window.location.reload();
}

}



















