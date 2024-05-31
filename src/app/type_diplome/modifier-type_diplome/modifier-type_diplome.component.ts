import { Type_diplomeService } from '../type_diplome.service';
import { Component, OnInit } from '@angular/core';
import { Type_diplome } from '../type_diplome';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifier-type_diplome',
  templateUrl: './modifier-type_diplome.component.html',
  styleUrls: ['./modifier-type_diplome.component.css']
})

export class ModifierType_diplomeComponent implements OnInit {

    type_diplome_id!: number;
    type_diplome: Type_diplome = new Type_diplome();
    constructor(private type_diplomeService: Type_diplomeService,
      private route: ActivatedRoute,
      private router: Router) { }

    ngOnInit(): void {
      this.type_diplome_id = this.route.snapshot.params['type_diplome_id'];

      this.type_diplomeService.afficherTypeDiplomeAvecId(this.type_diplome_id).subscribe(data => {
        this.type_diplome = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.type_diplomeService.modifierTypeDiplome(this.type_diplome_id, this.type_diplome).subscribe( data =>{
        this.goToType_diplomeList();
      }
      , error => console.log(error));
    }

    goToType_diplomeList(){
      this.router.navigate(['/type_diplomes']);
    }

}
