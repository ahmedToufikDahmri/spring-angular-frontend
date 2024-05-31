import { Router } from '@angular/router';
import { DepartementService } from '../departement.service';
import { Departement } from '../departement';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-departement',
  templateUrl: './cree-departement.component.html',
  styleUrls: ['./cree-departement.component.css']
})
export class CreeDepartementComponent implements OnInit {

  departement: Departement = new Departement();
  constructor(private departementService: DepartementService,
    private router: Router) { }

  ngOnInit(): void {
  }

  enregistrerDepartement(){
    this.departementService.creeDepartement(this.departement).subscribe(data =>{
      console.log(data);
      this.versDepartementList();
    },
      error => console.log(error));
  }

  versDepartementList(){
    this.router.navigate(['/departements']);
  }

  onSubmit(){
    console.log(this.departement);
    this.enregistrerDepartement();
  }
  refresh(): void {
    window.location.reload();
}
}


