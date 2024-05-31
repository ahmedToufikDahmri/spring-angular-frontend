import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { ActivatedRoute } from '@angular/router';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-compte-details',
  templateUrl: './afficher-compte.component.html',
  styleUrls: ['./afficher-compte.component.css']
})
export class AfficherCompteComponent implements OnInit {

  compte_id!: number
  compte!: Compte
  constructor(private route: ActivatedRoute, private CompteService: CompteService) { }

  ngOnInit(): void {
    this.compte_id = this.route.snapshot.params['compte_id'];

    this.compte = new Compte();
    this.CompteService.afficherCompteAvecId(this.compte_id).subscribe( data => {
      this.compte = data;
    });
  }

}
