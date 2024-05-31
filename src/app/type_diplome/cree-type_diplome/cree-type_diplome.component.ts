import { Router } from '@angular/router';
import { Type_diplomeService } from '../type_diplome.service';
import { Type_diplome } from '../type_diplome';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-type_diplome',
  templateUrl: './cree-type_diplome.component.html',
  styleUrls: ['./cree-type_diplome.component.css']
})
export class CreeType_diplomeComponent implements OnInit {

  type_diplome: Type_diplome = new Type_diplome();
  constructor(private type_diplomeService: Type_diplomeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  enregistrerTypeDiplome(){
    this.type_diplomeService.creeTypeDiplome(this.type_diplome).subscribe(data =>{
      console.log(data);
      this.versType_diplomeList();
    },
      error => console.log(error));
  }

  versType_diplomeList(){
    this.router.navigate(['/type_diplomes']);
  }

  onSubmit(){
    console.log(this.type_diplome);
    this.enregistrerTypeDiplome();
  }

  refresh(): void {
    window.location.reload();
}
}



















