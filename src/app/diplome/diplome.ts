import { Employe } from "../employe/employe";

export class Diplome {

    diplome_id!: number;
    specialite!:string;
    universite!: string ;
    annee!:string;
    type_diplome!:string;
    employe!: Employe;

}