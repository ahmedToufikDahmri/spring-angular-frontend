import { Employe } from '../employe';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.css']
})
export class ListeEmployeComponent implements OnInit {



employes!: Employe[];

  constructor(private employeService: EmployeService,
    private router: Router) { }

  ngOnInit(): void {
     this.afficherEmployes();

    //  this.employes= [{
    //   "employe_id":1,
    //   "poste": "test",
    //   "compte":2,
    //   "departement_id":2,
  

    //   }];
  }

  private afficherEmployes(){
    this.employeService.afficherListeEmployes().subscribe(data => {
      this.employes = data;
    });
  }


  modifierEmploye(employe_id: number){
    this.router.navigate(['modifier-employe', employe_id]);
  }

  supprimerEmploye(employe_id: number){
    this.employeService.supprimerEmploye(employe_id).subscribe( (data: any) => {
      console.log(data);
      this.afficherEmployes();
    })
  }

  afficherEmploye(employe_id: number){
    this.router.navigate(['afficher-employe', employe_id]);
  }

}
