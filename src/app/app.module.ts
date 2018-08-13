import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

import  { AppRoutingModule } from './app.routing.module';

import { AuthService } from './services/auth.service';
import { AuthGuardService, AuthGuardLoginService } from './services/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuardService, AuthGuardLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
