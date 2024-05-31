import { Departement } from '../departement';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartementService } from '../departement.service';

@Component({
  selector: 'app-departement-liste',
  templateUrl: './departement-liste.component.html',
  styleUrls: ['./departement-liste.component.css']
})
export class DepartementListeComponent implements OnInit {

//modifierdepartements(arg0: any) {
//throw new Error('Method not implemented.');
//}


departements!: Departement[];

  constructor(private departementService: DepartementService,
    private router: Router) { }

  ngOnInit(): void {
     this.afficherDepartements();

    //  this.departements= [{
    //   "departement_id":1,
    //   "nom": "test",

    //   }];
  }

  private afficherDepartements(){
    this.departementService.afficherDepartementsListe().subscribe(data => {
      this.departements = data;
    });
  }


  modifierDepartement(departement_id: number){
    this.router.navigate(['modifier-departement', departement_id]);
  }

  supprimerDepartement(departement_id: number){
    this.departementService.supprimerDepartement(departement_id).subscribe( (data: any) => {
      console.log(data);
      this.afficherDepartements();
    })
  }

  afficherDepartement(departement_id: number){
    this.router.navigate(['afficher-departement', departement_id]);
  }

}
