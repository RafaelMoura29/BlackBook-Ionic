import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {   HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { CadastroUnidadePage } from './cadastro-unidade.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroUnidadePage
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroUnidadePage]
})
export class CadastroUnidadePageModule {}

