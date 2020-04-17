import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestCreationPage } from './request-creation.page';

const routes: Routes = [
  {
    path: '',
    component: RequestCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestCreationPageRoutingModule {}
