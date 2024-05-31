import { Component, OnInit } from '@angular/core';
import { Departement } from '../departement';
import { ActivatedRoute } from '@angular/router';
import { DepartementService } from '../departement.service';

@Component({
  selector: 'app-afficher-departement',
  templateUrl: './afficher-departement.component.html',
  styleUrls: ['./afficher-departement.component.css']
})
export class AfficherDepartementComponent implements OnInit {
  departement_id!: number
  departement!: Departement
  constructor(private route: ActivatedRoute, private DepartementService: DepartementService) { }

  ngOnInit(): void {
    this.departement_id = this.route.snapshot.params['departement_id'];

    this.departement = new Departement();
    this.DepartementService.afficherDepartementAvecId(this.departement_id).subscribe( data => {
      this.departement = data;
    });
  }
}




