import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home5PageRoutingModule } from './home5-routing.module';

import { Home5Page } from './home5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home5PageRoutingModule
  ],
  declarations: [Home5Page]
})
export class Home5PageModule {}
