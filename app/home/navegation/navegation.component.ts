import { Observable } from 'rxjs';
import { Component, OnInit} from '@angular/core';
import { GetService } from './../../services/get.service';


@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent implements OnInit {

  name: any = false;
  rooms$: Observable<object>;

  constructor( private get: GetService ) {}

  ngOnInit () {
    let data = localStorage.getItem('CurrentUser');
    this.name = JSON.parse(data);
    this.rooms$ = this.get.getRooms();

  }

  accessRoom(param: MouseEvent) {
    let convert = (<HTMLInputElement>param.target);
    let chield = convert.firstChild.textContent;
    GetService.currentRoom.emit(chield.trim());
    GetService.buttonEvent.emit("1");
  }

}
