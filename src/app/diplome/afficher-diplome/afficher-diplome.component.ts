import { Component, OnInit } from '@angular/core';
import { Diplome } from '../diplome';
import { ActivatedRoute } from '@angular/router';
import { DiplomeService } from '../diplome.service';

@Component({
  selector: 'app-diplome-details',
  templateUrl: './afficher-diplome.component.html',
  styleUrls: ['./afficher-diplome.component.css']
})
export class AfficherDiplomeComponent implements OnInit {

  diplome_id!: number
  diplome!: Diplome
  constructor(private route: ActivatedRoute, private DiplomeService: DiplomeService) { }

  ngOnInit(): void {
    this.diplome_id = this.route.snapshot.params['diplome_id'];

    this.diplome = new Diplome();
    this.DiplomeService.afficherDiplomeAvecId(this.diplome_id).subscribe( data => {
      this.diplome = data;
    });
  }

}
