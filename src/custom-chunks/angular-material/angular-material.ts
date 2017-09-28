// import angular material chunks that we want to use
import { NgModule } from '@angular/core';
import { MdCardModule, MdToolbarModule, MdDialogModule, MdButtonModule, MdCheckboxModule, MdInputModule } from '@angular/material';

const modules = [ MdCardModule, MdToolbarModule, MdDialogModule, MdButtonModule, MdCheckboxModule, MdInputModule ];
// Export this as a module so we can import it in other modules or just into the main module whenever we want this
// functionality
@NgModule({
  imports: modules,
  exports: modules,
})
export class CustomChunksAngularMaterialModule { }