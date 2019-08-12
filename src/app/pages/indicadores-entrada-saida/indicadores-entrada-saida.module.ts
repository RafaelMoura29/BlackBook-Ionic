import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IndicadoresEntradaSaidaPage } from './indicadores-entrada-saida.page';

const routes: Routes = [
  {
    path: '',
    component: IndicadoresEntradaSaidaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndicadoresEntradaSaidaPage]
})
export class IndicadoresEntradaSaidaPageModule {}
