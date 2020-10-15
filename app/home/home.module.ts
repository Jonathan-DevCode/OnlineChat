import { ChangeService } from './../services/logic/change.logic';
import { NavegationModule } from './navegation/navegation.module';
import { ChatWindowModule } from './chat-window/chat-window.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavegationModule,
    ChatWindowModule
  ],
  providers: [ ChangeService ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
