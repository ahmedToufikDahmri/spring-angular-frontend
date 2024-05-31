import { Diplome } from '../diplome';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiplomeService } from '../diplome.service';

@Component({
  selector: 'app-liste-diplome',
  templateUrl: './liste-diplome.component.html',
  styleUrls: ['./liste-diplome.component.css']
})
export class ListeDiplomeComponent implements OnInit {

//modifierdiplomes(arg0: any) {
//throw new Error('Method not implemented.');
//}


diplomes!: Diplome[];

  constructor(private diplomeService: DiplomeService,
    private router: Router) { }

  ngOnInit(): void {
     this.afficherDiplomes();
/* 
     this.diplomes= [{
      "diplome_id":1,
      "nom": "test",
      "prenom":"AAA",
      "genre":"BBBBB",
      "date_naissance":"1995-12-15",
      "telephone":55654654,
      "adresse":"SSSSSS",

      }]; */
  }

  private afficherDiplomes(){
    this.diplomeService.afficherDiplomesListe().subscribe(data => {
      this.diplomes = data;
    });
  }


  modifierDiplome(diplome_id: number){
    this.router.navigate(['modifier-diplome', diplome_id]);
  }

  supprimerDiplome(diplome_id: number){
    this.diplomeService.supprimerDiplome(diplome_id).subscribe( (data: any) => {
      console.log(data);
      this.afficherDiplomes();
    })
  }

  afficherDiplome(diplome_id: number){
    this.router.navigate(['afficher-diplome', diplome_id]);
  }

}
