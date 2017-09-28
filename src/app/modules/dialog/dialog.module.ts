import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { CustomChunksAngularMaterialModule } from '../../../custom-chunks/angular-material/angular-material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations : [
    DialogComponent
  ],
  exports : [
    DialogComponent
  ],
  imports: [
    CommonModule,
    CustomChunksAngularMaterialModule,
    FormsModule
  ]
})
export class DialogModule { }
