import { Compte } from '../compte';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-liste-compte',
  templateUrl: './liste-compte.component.html',
  styleUrls: ['./liste-compte.component.css']
})
export class ListeCompteComponent implements OnInit {

//modifiercomptes(arg0: any) {
//throw new Error('Method not implemented.');
//}


comptes!: Compte[];

  constructor(private compteService: CompteService,
    private router: Router) { }

  ngOnInit(): void {
     this.afficherComptes();
/* 
     this.comptes= [{
      "compte_id":1,
      "nom": "test",
      "prenom":"AAA",
      "genre":"BBBBB",
      "date_naissance":"1995-12-15",
      "telephone":55654654,
      "adresse":"SSSSSS",

      }]; */
  }

  private afficherComptes(){
    this.compteService.afficherComptesListe().subscribe(data => {
      this.comptes = data;
    });
  }


  modifierCompte(compte_id: number){
    this.router.navigate(['modifier-compte', compte_id]);
  }

  supprimerCompte(compte_id: number){
    this.compteService.supprimerCompte(compte_id).subscribe( (data: any) => {
      console.log(data);
      this.afficherComptes();
    })
  }

  afficherCompte(compte_id: number){
    this.router.navigate(['afficher-compte', compte_id]);
  }

}
