import { MessageService } from '../../services/logic/message.logic';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from './chat-window.component';



@NgModule({
  declarations: [ ChatWindowComponent ],
  imports: [
    CommonModule
  ],
  providers: [ MessageService ],
  exports: [ ChatWindowComponent ]
})
export class ChatWindowModule { }
