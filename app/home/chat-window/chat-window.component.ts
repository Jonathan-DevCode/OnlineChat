import { MessageService } from '../../services/logic/message.logic';
import { PostService } from './../../services/post.service';
import { SocketService } from './../../services/socket-io.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetService } from './../../services/get.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  
  name: any;
  room: any;
  message: string;
  @ViewChild('inp') wipe : ElementRef;

  constructor( 
    private get: GetService, 
    private msg: MessageService,
    private post: PostService,
    public ioServer: SocketService ) 
  {}
  //end of constructor

  getMessage(event: KeyboardEvent){
    this.message = (<HTMLInputElement>event.target).value;
    if(event.keyCode == 13) {
      this.sendMessage();
    };
  }
  
  ngOnInit(): void {

    let data : any = localStorage.getItem('CurrentUser');
    data = JSON.parse(data);
    this.name = data;
    this.room = data.room;

    this.get.getMessage(this.room).then((result) => {
      if (result != undefined) {
        result.forEach(element => {
          this.msg.constructMessages(element, this.name);
        });
      };
    });


    GetService.currentRoom.subscribe((response) => {
      this.ioServer.emit("leave_room", this.room);
      this.msg.wipeMessages();
      this.room = response;
      this.ioServer.emit("join_room", response);
    
      this.get.getMessage(response).then((result) => {
        if (result != undefined) {
          result.forEach(element => {
            this.msg.constructMessages(element, this.name);
          });
        };
      });

      
    });
    
    this.ioServer.listen('answer').subscribe((data : any) => {
      data = JSON.parse(data);
      this.msg.constructMessages(data, this.name);
    });

  }

  sendMessage() {
    let data = JSON.stringify({ 
      name: this.name.name,
      room: this.room, 
      message: this.message 
    });

    this.wipe.nativeElement.value = "";

    this.post.addMessage(data);
    this.ioServer.emit('answer', data );
  }

  getButton() {
    GetService.buttonEvent.emit("1");
  }

}
