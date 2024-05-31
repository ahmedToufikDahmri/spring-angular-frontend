import { Router } from '@angular/router';
import { DiplomeService } from '../diplome.service';
import { Type_diplomeService } from 'src/app/type_diplome/type_diplome.service';

import { Diplome } from '../diplome';
import { Component, OnInit } from '@angular/core';
import { Type_diplome } from 'src/app/type_diplome/type_diplome';

import { Compte } from 'src/app/compte/compte';
import { CompteService } from 'src/app/compte/compte.service';


@Component({
  selector: 'app-create-diplome',
  templateUrl: './cree-diplome.component.html',
  styleUrls: ['./cree-diplome.component.css']
})
export class CreeDiplomeComponent implements OnInit {

  diplome: Diplome = new Diplome();
  constructor(private diplomeService: DiplomeService, private type_diplomeService: Type_diplomeService,
    private compteService: CompteService, private router: Router) { }

    type_diplomes!: Type_diplome[];
    comptes!: Compte[];


  ngOnInit(): void {
    this.afficherType_diplome();
    this.afficherComptes();

 
  }


  private afficherType_diplome(){
    this.type_diplomeService.afficherTypeDiplomesListe().subscribe(data => {
      this.type_diplomes = data;
    });
  }

  private afficherComptes(){
    this.compteService.afficherComptesListe().subscribe(data => {
      this.comptes = data;
    });
  }

  enregistrerDiplome(){
    this.diplomeService.creeDiplome(this.diplome).subscribe(data =>{
      console.log(data);
      this.versDiplomeList();
    },
      error => console.log(error));
  }

  versDiplomeList(){
    this.router.navigate(['/diplomes']);
  }

  onSubmit(){
    console.log(this.diplome);
    this.enregistrerDiplome();
  }

  refresh(): void {
    window.location.reload();
}
}



















