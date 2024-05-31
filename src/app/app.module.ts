
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListeEmployeComponent } from './employe/liste-employe/liste-employe.component';
import { CreeEmployeComponent } from './employe/cree-employe/cree-employe.component';
import { ModifierEmployeComponent } from './employe/modifier-employe/modifier-employe.component';
import { AfficherEmployeComponent } from './employe/afficher-employe/afficher-employe.component';

import { DepartementListeComponent } from './departement/departement-liste/departement-liste.component';
import { AfficherDepartementComponent } from './departement/afficher-departement/afficher-departement.component';
import { CreeDepartementComponent } from './departement/cree-departement/cree-departement.component';
import { ModifierDepartementComponent } from './departement/modifier-departement/modifier-departement.component';

import { AfficherCompteComponent } from './compte/afficher-compte/afficher-compte.component';
import { CreeCompteComponent } from './compte/cree-compte/cree-compte.component';
import { ModifierCompteComponent } from './compte/modifier-compte/modifier-compte.component';
import { ListeCompteComponent } from './compte/liste-compte/liste-compte.component';

import { AfficherMissionComponent } from './mission/afficher-mission/afficher-mission.component';
import { CreeMissionComponent } from './mission/cree-mission/cree-mission.component';
import { ModifierMissionComponent } from './mission/modifier-mission/modifier-mission.component';
import { ListeMissionComponent } from './mission/liste-mission/liste-mission.component';

import { ListeDiplomeComponent } from './diplome/liste-diplome/liste-diplome.component';
import { CreeDiplomeComponent } from './diplome/cree-diplome/cree-diplome.component';
import { AfficherDiplomeComponent } from './diplome/afficher-diplome/afficher-diplome.component';
import { ModifierDiplomeComponent } from './diplome/modifier-diplome/modifier-diplome.component';

import { ListeType_diplomeComponent } from './type_diplome/liste-type_diplome/liste-type_diplome.component';
import { CreeType_diplomeComponent } from './type_diplome/cree-type_diplome/cree-type_diplome.component';
import { AfficherType_diplomeComponent } from './type_diplome/afficher-type_diplome/afficher-type_diplome.component';
import { ModifierType_diplomeComponent } from './type_diplome/modifier-type_diplome/modifier-type_diplome.component';

import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        ListeEmployeComponent,
        // CreeEmployeComponent,
        ModifierEmployeComponent,
        AfficherEmployeComponent,
        AfficherDepartementComponent,
        CreeDepartementComponent,
        ModifierDepartementComponent,
        DepartementListeComponent,
        AfficherCompteComponent,
        ListeCompteComponent,
        ModifierCompteComponent,
        CreeCompteComponent,
        AfficherMissionComponent,
        CreeMissionComponent,
        ModifierMissionComponent,
        ListeMissionComponent,
        ListeDiplomeComponent,
        CreeDiplomeComponent,
        AfficherDiplomeComponent,
        ModifierDiplomeComponent,
        ListeType_diplomeComponent,
        CreeType_diplomeComponent,
        AfficherType_diplomeComponent,
        ModifierType_diplomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatInputModule,
        NgFor,
        MatSelectModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        CreeEmployeComponent
    ]
})
export class AppModule { }
