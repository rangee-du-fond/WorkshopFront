import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { RequestDetailsPageRoutingModule } from './request-details-routing.module';

import { RequestDetailsPage } from './request-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RequestDetailsPageRoutingModule
  ],
  declarations: [RequestDetailsPage]
})
export class RequestDetailsPageModule {}
