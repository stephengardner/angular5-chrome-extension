import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardComponent } from './components/md-card/md-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MdCardComponent],
  exports : [MdCardComponent]
})
export class AgMdModule { }
