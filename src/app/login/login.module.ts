import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../login/login.component';
import {HttpClientModule} from '@angular/common/http'

import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,HttpClientModule,
    LoginRoutingModule
  ],
  providers:[DatePipe]
})
export class LoginModule { }
