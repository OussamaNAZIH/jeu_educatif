import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home7PageRoutingModule } from './home7-routing.module';

import { Home7Page } from './home7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home7PageRoutingModule
  ],
  declarations: [Home7Page]
})
export class Home7PageModule {}
