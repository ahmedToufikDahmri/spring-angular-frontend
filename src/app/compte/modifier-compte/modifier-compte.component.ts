import { CompteService } from '../compte.service';
import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifier-compte',
  templateUrl: './modifier-compte.component.html',
  styleUrls: ['./modifier-compte.component.css']
})

export class ModifierCompteComponent implements OnInit {

    compte_id!: number;
    compte: Compte = new Compte();
    constructor(private compteService: CompteService,
      private route: ActivatedRoute,
      private router: Router) { }

    ngOnInit(): void {
      this.compte_id = this.route.snapshot.params['compte_id'];

      this.compteService.afficherCompteAvecId(this.compte_id).subscribe(data => {
        this.compte = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.compteService.modifierCompte(this.compte_id, this.compte).subscribe( data =>{
        this.goToCompteList();
      }
      , error => console.log(error));
    }

    goToCompteList(){
      this.router.navigate(['/comptes']);
    }

}
