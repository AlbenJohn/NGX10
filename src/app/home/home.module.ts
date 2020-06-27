import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import {LeftpanelComponent} from "../leftpanel/leftpanel.component"
const routes: Routes = [{ path: '', component: HomeComponent }];


@NgModule({
  declarations: [HomeComponent,LeftpanelComponent],
  imports: [
    CommonModule,FormsModule,
    // HomeRoutingModule
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule,LeftpanelComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
