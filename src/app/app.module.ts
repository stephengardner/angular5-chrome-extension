// This is our main app module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarModule } from './modules/navbar/navbar.module';
import { ProfilePictureThumbnailModule } from './modules/profile-picture-thumbnail/profile-picture-thumbnail.module';
import { HomeModule } from './modules/home/home.module';

// angular material imports custom chunk (has other angular material components in it)
import { CustomChunksAngularMaterialModule } from '../custom-chunks/angular-material/angular-material';

import { AppComponent } from './app.component';
import { DialogModule } from './modules/dialog/dialog.module';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CustomChunksAngularMaterialModule,
    FormsModule,
    DialogModule,
    FlexLayoutModule,
    NavbarModule,
    ProfilePictureThumbnailModule,
    HomeModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
