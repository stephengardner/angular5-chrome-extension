// import angular material chunks that we want to use
import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule, MatDialogModule, MatButtonModule, MatCheckboxModule, MatInputModule }
  from '@angular/material';

const modules = [ MatCardModule, MatToolbarModule, MatDialogModule, MatButtonModule, MatCheckboxModule, MatInputModule ];
// Export this as a module so we can import it in other modules or just into the main module whenever we want this
// functionality
@NgModule({
  imports: modules,
  exports: modules,
})
export class CustomChunksAngularMaterialModule { }