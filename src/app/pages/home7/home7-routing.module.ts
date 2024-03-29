import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home7Page } from './home7.page';

const routes: Routes = [
  {
    path: '',
    component: Home7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home7PageRoutingModule {}
