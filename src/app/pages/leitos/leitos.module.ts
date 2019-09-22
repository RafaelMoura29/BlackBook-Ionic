import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { QuadroLeitoComponent } from '../../components/quadro-leito/quadro-leito.component'

import { IonicModule } from '@ionic/angular';

import { LeitosPage } from './leitos.page';

const routes: Routes = [
  {
    path: '',
    component: LeitosPage
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
  declarations: [LeitosPage, QuadroLeitoComponent]
})
export class LeitosPageModule {}
