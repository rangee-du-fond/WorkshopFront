import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { RequestCreationPageRoutingModule } from './request-creation-routing.module';

import { RequestCreationPage } from './request-creation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RequestCreationPageRoutingModule
  ],
  declarations: [RequestCreationPage]
})
export class RequestCreationPageModule {}
