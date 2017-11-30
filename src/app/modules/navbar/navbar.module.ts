import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfilePictureThumbnailModule } from '../profile-picture-thumbnail/profile-picture-thumbnail.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ProfilePictureThumbnailModule,
    MatIconModule
  ],
  declarations: [ NavbarComponent ],
  exports : [ NavbarComponent ]
})
export class NavbarModule { }
