import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from '../employe.service';
import { Compte } from 'src/app/compte/compte';
import { CompteService } from 'src/app/compte/compte.service';
import { DepartementService } from 'src/app/departement/departement.service';
import { Departement } from 'src/app/departement/departement';
import { Diplome } from 'src/app/diplome/diplome';
import { DiplomeService } from 'src/app/diplome/diplome.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employe-details',
  templateUrl: './afficher-employe.component.html',
  styleUrls: ['./afficher-employe.component.css']
})
export class AfficherEmployeComponent implements OnInit {


  employe_id!: number
  employe!: Employe

  departements!: Departement[];
  comptes!: Compte[];
  diplomes!: Diplome[];

  constructor(private route: ActivatedRoute, private employeService: EmployeService, private departementService: DepartementService,
    private compteService: CompteService,  private diplomeService: DiplomeService, private router: Router) { }



  
  ngOnInit(): void {

    this.afficherDepartements();
    this.afficherComptes();
    // this.afficherDiplomes();
    // this.afficherDiplome();
    // this.modifierDiplome();
    // this.supprimerDiplome();

    this.employe_id = this.route.snapshot.params['employe_id'];

    this.employe = new Employe();
    this.employeService.afficherEmployeAvecId(this.employe_id).subscribe( data => {
      this.employe = data;
    });

    // this.diplome_id = this.route.snapshot.params['diplome_id'];

    // this.diplome = new Diplome();
    // this.DiplomeService.afficherDiplomeAvecId(this.diplome_id).subscribe( data => {
    //   this.diplome = data;
    // });

    }
  

  private afficherDepartements(){
    this.departementService.afficherDepartementsListe().subscribe(data => {
      this.departements = data;
    });
  }
 
 
 
  private afficherComptes(){
     this.compteService.afficherComptesListe().subscribe(data => {
       this.comptes = data;
     });
   }

  //  private afficherDiplomes(){
  //   this.diplomeService.afficherDiplomesListe().subscribe(data => {
  //     this.diplomes = data;
  //   });
  // }


  // modifierDiplome(diplome_id: number){
  //   this.router.navigate(['modifier-diplome', diplome_id]);
  // }

  // supprimerDiplome(diplome_id: number){
  //   this.diplomeService.supprimerDiplome(diplome_id).subscribe( (data: any) => {
  //     console.log(data);
  //     this.afficherDiplomes();
  //   })
  // }

  // afficherDiplome(diplome_id: number){
  //   this.router.navigate(['afficher-diplome', diplome_id]);
  // }


}
