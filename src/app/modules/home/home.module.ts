import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpModule } from '@angular/http';
import {HomeService} from "./services/home.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers : [ HomeService ],
  exports : [
    HomeComponent
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
