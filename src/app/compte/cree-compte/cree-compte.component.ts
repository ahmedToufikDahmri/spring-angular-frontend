import { Router } from '@angular/router';
import { CompteService } from '../compte.service';
import { Compte } from '../compte';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-compte',
  templateUrl: './cree-compte.component.html',
  styleUrls: ['./cree-compte.component.css']
})
export class CreeCompteComponent implements OnInit {

  compte: Compte = new Compte();
  constructor(private compteService: CompteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  enregistrerCompte(){
    this.compteService.creeCompte(this.compte).subscribe(data =>{
      console.log(data);
      this.versCompteList();
    },
      error => console.log(error));
  }

  versCompteList(){
    this.router.navigate(['/comptes']);
  }

  onSubmit(){
    console.log(this.compte);
    this.enregistrerCompte();
  }
  refresh(): void {
    window.location.reload();
}
}



















