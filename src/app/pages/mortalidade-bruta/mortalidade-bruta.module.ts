import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MortalidadeBrutaPage } from './mortalidade-bruta.page';

const routes: Routes = [
  {
    path: '',
    component: MortalidadeBrutaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MortalidadeBrutaPage]
})
export class MortalidadeBrutaPageModule {}
