import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureThumbnailComponent } from './profile-picture-thumbnail.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports : [ ProfilePictureThumbnailComponent ],
  declarations: [ProfilePictureThumbnailComponent]
})
export class ProfilePictureThumbnailModule { }
