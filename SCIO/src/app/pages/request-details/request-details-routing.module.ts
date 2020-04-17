import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestDetailsPage } from './request-details.page';

const routes: Routes = [
  {
    path: '',
    component: RequestDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestDetailsPageRoutingModule {}
