import { Type_diplome } from '../type_diplome';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type_diplomeService } from '../type_diplome.service';

@Component({
  selector: 'app-liste-type_diplome',
  templateUrl: './liste-type_diplome.component.html',
  styleUrls: ['./liste-type_diplome.component.css']
})
export class ListeType_diplomeComponent implements OnInit {

//modifiertype_diplomes(arg0: any) {
//throw new Error('Method not implemented.');
//}


type_diplomes!: Type_diplome[];

  constructor(private type_diplomeService: Type_diplomeService,
    private router: Router) { }

  ngOnInit(): void {
     this.afficherType_diplomes();
/* 
     this.type_diplomes= [{
      "type_diplome_id":1,
      "nom": "test",
      "prenom":"AAA",
      "genre":"BBBBB",
      "date_naissance":"1995-12-15",
      "telephone":55654654,
      "adresse":"SSSSSS",

      }]; */
  }

  private afficherType_diplomes(){
    this.type_diplomeService.afficherTypeDiplomesListe().subscribe(data => {
      this.type_diplomes = data;
    });
  }


  modifierTypeDiplome(type_diplome_id: number){
    this.router.navigate(['modifier-type_diplome', type_diplome_id]);
  }

  supprimerTypeDiplome(type_diplome_id: number){
    this.type_diplomeService.supprimerTypeDiplome(type_diplome_id).subscribe( (data: any) => {
      console.log(data);
      this.afficherType_diplomes();
    })
  }

  afficherTypeDiplome(type_diplome_id: number){
    this.router.navigate(['afficher-type_diplome', type_diplome_id]);
  }

}
