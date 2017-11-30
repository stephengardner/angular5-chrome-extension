import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardComponent } from './components/md-card/md-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MatCardComponent],
  exports : [MatCardComponent]
})
export class AgMatModule { }
