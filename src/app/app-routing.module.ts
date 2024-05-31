import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreeEmployeComponent } from './employe/cree-employe/cree-employe.component';
import { ListeEmployeComponent } from './employe/liste-employe/liste-employe.component';
import { ModifierEmployeComponent } from './employe/modifier-employe/modifier-employe.component';
import { AfficherEmployeComponent } from './employe/afficher-employe/afficher-employe.component';

import { ListeCompteComponent } from './compte/liste-compte/liste-compte.component';
import { CreeCompteComponent } from './compte/cree-compte/cree-compte.component';
import { AfficherCompteComponent } from './compte/afficher-compte/afficher-compte.component';
import { ModifierCompteComponent } from './compte/modifier-compte/modifier-compte.component';

import { AfficherDepartementComponent } from './departement/afficher-departement/afficher-departement.component';
import { CreeDepartementComponent } from './departement/cree-departement/cree-departement.component';
import { ModifierDepartementComponent } from './departement/modifier-departement/modifier-departement.component';
import { DepartementListeComponent } from './departement/departement-liste/departement-liste.component';

import { ListeMissionComponent } from './mission/liste-mission/liste-mission.component';
import { CreeMissionComponent } from './mission/cree-mission/cree-mission.component';
import { AfficherMissionComponent } from './mission/afficher-mission/afficher-mission.component';
import { ModifierMissionComponent } from './mission/modifier-mission/modifier-mission.component';

import { ListeDiplomeComponent } from './diplome/liste-diplome/liste-diplome.component';
import { CreeDiplomeComponent } from './diplome/cree-diplome/cree-diplome.component';
import { AfficherDiplomeComponent } from './diplome/afficher-diplome/afficher-diplome.component';
import { ModifierDiplomeComponent } from './diplome/modifier-diplome/modifier-diplome.component';

import { ListeType_diplomeComponent } from './type_diplome/liste-type_diplome/liste-type_diplome.component';
import { CreeType_diplomeComponent } from './type_diplome/cree-type_diplome/cree-type_diplome.component';
import { AfficherType_diplomeComponent } from './type_diplome/afficher-type_diplome/afficher-type_diplome.component';
import { ModifierType_diplomeComponent } from './type_diplome/modifier-type_diplome/modifier-type_diplome.component';





const routes: Routes = [

  {path: '', redirectTo:'employes', pathMatch:'full'},

  {path: 'employes', component: ListeEmployeComponent},
  {path: 'cree-employe', component: CreeEmployeComponent},
  {path: 'modifier-employe/:employe_id', component: ModifierEmployeComponent},
  {path: 'afficher-employe/:employe_id', component: AfficherEmployeComponent},

  {path: 'cree-departement', component: CreeDepartementComponent},
  {path: 'departements', component: DepartementListeComponent},
  {path: 'modifier-departement/:departement_id', component: ModifierDepartementComponent},
  {path: 'afficher-departement/:departement_id', component: AfficherDepartementComponent},

  {path: 'comptes', component: ListeCompteComponent},
  {path: 'cree-compte', component: CreeCompteComponent},
  {path: 'modifier-compte/:compte_id', component: ModifierCompteComponent},
  {path: 'afficher-compte/:compte_id', component: AfficherCompteComponent},

  {path: 'missions', component: ListeMissionComponent},
  {path: 'cree-mission', component: CreeMissionComponent},
  {path: 'modifier-mission/:mission_id', component: ModifierMissionComponent},
  {path: 'afficher-mission/:mission_id', component: AfficherMissionComponent},

  {path: 'diplomes', component: ListeDiplomeComponent},
  {path: 'cree-diplome', component: CreeDiplomeComponent},
  {path: 'modifier-diplome/:diplome_id', component: ModifierDiplomeComponent},
  {path: 'afficher-diplome/:diplome_id', component: AfficherDiplomeComponent},
  
  {path: 'type_diplomes', component: ListeType_diplomeComponent},
  {path: 'cree-type_diplome', component: CreeType_diplomeComponent},
  {path: 'modifier-type_diplome/:type_diplome_id', component: ModifierType_diplomeComponent},
  {path: 'afficher-type_diplome/:type_diplome_id', component: AfficherType_diplomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
