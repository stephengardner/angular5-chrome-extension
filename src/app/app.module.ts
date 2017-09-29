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
import {environment} from "../environments/environment";

console.log(`
--------------------------- Begin Angular 4 Augie Starter Info -----------------------------
->                               Environment Variables
We're using environment variables which are auto-set by angular.cli when we run a build.
These are located in src/environments.  When you run an npm build command with an
environment, the environment.ts that you import will get automatically swapped with whatever
environment you're currently in.

->                                        API
Our environment api url is set to make it easier to call external routes.
CORS, by way of the 'cors' npm module, can assist any server in whitelisting this domain
Because it is most likely that we are accessing an outside API for whatever data we need.
Our environment API url is :", ${environment.api}

->                                   File Structure
The app is segmented into *modules* which are all under /app and encapsulate a module as 
well as any potential components and services.  Services, if included, are separated into 
their own /services directory within each module.  "Modules" could be aptly-named 
"features". Technically a service doesn't need a module, but we're benefiting from 
encapsulation.

->                                     Deployment
The app is easily deployed to heroku.
If you don't have a git repo, then do 'git init'.
If you don't have a heroku app, then do 'heroku create app'
git add .
git commit -m 'first deploy'
git push heroku master

->                                 Deployment Variables
Part of what makes this so easy is that there are variables set up in package.json that 
process the bundling and deployment of the app when it is pushed to heroku, and it happens 
after the push. Within package.json you'll see "postinstall" and "start" scripts.
In order for these to work, some things had to be changed from the original 'ng create' 
scaffolded app. For example, 'typescript', '@angular/cli', and '@angular/compiler' had to be 
included in standard dependencies (not dev dependencies) in package.json.
----------------------------- End Angular 4 Augie Starter Info -----------------------------`);
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
