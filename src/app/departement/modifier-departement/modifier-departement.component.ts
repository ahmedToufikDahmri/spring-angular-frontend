import { DepartementService } from '../departement.service';
import { Component, OnInit } from '@angular/core';
import { Departement } from '../departement';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifier-departement',
  templateUrl: './modifier-departement.component.html',
  styleUrls: ['./modifier-departement.component.css']
})

export class ModifierDepartementComponent implements OnInit {

    departement_id!: number;
    departement: Departement = new Departement();
    constructor(private departementService: DepartementService,
      private route: ActivatedRoute,
      private router: Router) { }

    ngOnInit(): void {
      this.departement_id = this.route.snapshot.params['departement_id'];

      this.departementService.afficherDepartementAvecId(this.departement_id).subscribe(data => {
        this.departement = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.departementService.modifierDepartement(this.departement_id, this.departement).subscribe( data =>{
        this.goToDepartementList();
      }
      , error => console.log(error));
    }

    goToDepartementList(){
      this.router.navigate(['/departements']);
    }

}