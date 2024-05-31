import { EmployeService } from '../employe.service';
import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/departement/departement';
import { DepartementService } from 'src/app/departement/departement.service';
import { Compte } from 'src/app/compte/compte';
import { CompteService } from 'src/app/compte/compte.service';


@Component({
  selector: 'app-modifier-employe',
  templateUrl: './modifier-employe.component.html',
  styleUrls: ['./modifier-employe.component.css']
})

export class ModifierEmployeComponent implements OnInit {

    employe_id!: number;
    employe: Employe = new Employe();
    constructor(private employeService: EmployeService,
      private route: ActivatedRoute, private departementService: DepartementService,private compteService: CompteService,
      private router: Router) { }

      departements!: Departement[];
      comptes!: Compte[];

    ngOnInit(): void {

      this.afficherDepartements();
      this.afficherComptes();
      
      this.employe_id = this.route.snapshot.params['employe_id'];

      this.employeService.afficherEmployeAvecId(this.employe_id).subscribe(data => {
        this.employe = data;
      }, error => console.log(error));
    }

    private afficherDepartements(){
      this.departementService.afficherDepartementsListe().subscribe(data => {
        this.departements = data;
      });
    }
   
    private afficherComptes(){
       this.compteService.afficherComptesListe().subscribe(data => {
         this.comptes = data;
       });
     }

    onSubmit(){
      this.employeService.modifierEmploye(this.employe_id, this.employe).subscribe( data =>{
        this.goToEmployeList();
      }
      , error => console.log(error));
    }

    goToEmployeList(){
      this.router.navigate(['/employes']);
    }

}
