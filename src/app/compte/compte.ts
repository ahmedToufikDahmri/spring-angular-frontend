import { Employe } from "../employe/employe";

export class Compte {

    public compte_id!: number;
    public  nom!: string ;
    public  prenom!:string;
    public  genre!:string;
    public  date_naissance!:string;
    public  telephone!:number;
    public  adresse!:string;
	public  employe!: Employe;

}

