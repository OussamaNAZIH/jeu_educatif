import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home5Page } from './home5.page';

const routes: Routes = [
  {
    path: '',
    component: Home5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home5PageRoutingModule {}
