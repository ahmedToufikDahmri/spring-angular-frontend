import { Compte } from "../compte/compte";
import { Departement } from "../departement/departement";
import { Diplome } from "../diplome/diplome";
import { Mission } from "../mission/mission";

export class Employe {

    employe_id!: number;
    poste!: string;
    compte!: Compte;
    departement!: Departement ;
    diplome!:Diplome;
    mission!:Mission;






}


