import { Router } from '@angular/router';
import { EmployeService } from '../employe.service';
import { Employe } from '../employe';
import { Component, OnInit } from '@angular/core';

import { Departement } from 'src/app/departement/departement';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Compte } from 'src/app/compte/compte';
import { DepartementService } from 'src/app/departement/departement.service';
import { CompteService } from 'src/app/compte/compte.service';
import { Diplome } from 'src/app/diplome/diplome';



@Component({
  selector: 'app-cree-employe',
  templateUrl: './cree-employe.component.html',
  styleUrls: ['./cree-employe.component.css'],
  standalone: true,

  imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule],


})


export class CreeEmployeComponent implements OnInit {

  employe: Employe = new Employe();
  constructor(private employeService: EmployeService, private departementService: DepartementService,
    private compteService: CompteService,
    private router: Router) { }

    departements!: Departement[];

    comptes!: Compte[];

    diplomes!: Diplome[];

  ngOnInit(): void {

    this.afficherDepartements();
    this.afficherComptes();

    // this.departements= [{
    //  "departement":1,
    //  "nom": "test",

    //  }];


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


  enregistrerEmploye(){
    this.employeService.creeEmploye(this.employe).subscribe(data =>{
      console.log(data);

      this.compteService.afficherComptesListe().subscribe(data => {
        this.comptes = data;
      });

      this.departementService.afficherDepartementsListe().subscribe(data => {
        this.departements = data;
      });
      
      this.versEmployeList();
    },
      error => console.log(error));
 
  }

  versEmployeList(){
    this.router.navigate(['/employes']);
  }

  onSubmit(){
    console.log(this.employe);
    this.enregistrerEmploye();
  }

  refresh(): void {
    window.location.reload();
}
}




















