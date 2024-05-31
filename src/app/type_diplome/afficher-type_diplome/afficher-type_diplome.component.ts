import { Component, OnInit } from '@angular/core';
import { Type_diplome } from '../type_diplome';
import { ActivatedRoute } from '@angular/router';
import { Type_diplomeService } from '../type_diplome.service';

@Component({
  selector: 'app-type_diplome-details',
  templateUrl: './afficher-type_diplome.component.html',
  styleUrls: ['./afficher-type_diplome.component.css']
})
export class AfficherType_diplomeComponent implements OnInit {

  type_diplome_id!: number
  type_diplome!: Type_diplome
  constructor(private route: ActivatedRoute, private Type_diplomeService: Type_diplomeService) { }

  ngOnInit(): void {
    this.type_diplome_id = this.route.snapshot.params['type_diplome_id'];

    this.type_diplome = new Type_diplome();
    this.Type_diplomeService.afficherTypeDiplomeAvecId(this.type_diplome_id).subscribe( data => {
      this.type_diplome = data;
    });
  }

}
