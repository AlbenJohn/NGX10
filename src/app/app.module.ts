import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'jqueryui';
import 'jquery.ui.layout';
import {HttpClientModule} from '@angular/common/http'
import {DatePipe} from '@angular/common';
import { DynamicviewComponent } from './dynamicview/dynamicview.component';
@NgModule({
  declarations: [
    AppComponent,
    DynamicviewComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule
  ],
  entryComponents:[DynamicviewComponent],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
