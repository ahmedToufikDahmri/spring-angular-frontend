import { DiplomeService } from '../diplome.service';
import { Component, OnInit } from '@angular/core';
import { Diplome } from '../diplome';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifier-diplome',
  templateUrl: './modifier-diplome.component.html',
  styleUrls: ['./modifier-diplome.component.css']
})

export class ModifierDiplomeComponent implements OnInit {

    diplome_id!: number;
    diplome: Diplome = new Diplome();
    constructor(private diplomeService: DiplomeService,
      private route: ActivatedRoute,
      private router: Router) { }

    ngOnInit(): void {
      this.diplome_id = this.route.snapshot.params['diplome_id'];

      this.diplomeService.afficherDiplomeAvecId(this.diplome_id).subscribe(data => {
        this.diplome = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.diplomeService.modifierDiplome(this.diplome_id, this.diplome).subscribe( data =>{
        this.goToDiplomeList();
      }
      , error => console.log(error));
    }

    goToDiplomeList(){
      this.router.navigate(['/diplomes']);
    }

}
