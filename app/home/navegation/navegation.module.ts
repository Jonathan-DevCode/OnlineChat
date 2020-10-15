import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegationComponent } from './navegation.component';



@NgModule({
  declarations: [NavegationComponent],
  imports: [
    CommonModule
  ],
  exports: [ NavegationComponent ]
})
export class NavegationModule { }
