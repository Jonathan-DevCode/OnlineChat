import { ChangeService } from './../services/logic/change.logic';
import { GetService } from './../services/get.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  verify: number = 1;
  win: number;

  constructor(private change: ChangeService) { }

  ngOnInit(): void {
    this.win = window.innerWidth;
    this.change.change(this.win, this.verify, "navegation", "chatwin");

    window.addEventListener("resize", () => {
      this.win = window.innerWidth;
      this.change.change(this.win, this.verify, "navegation", "chatwin");
    })

    GetService.buttonEvent.subscribe(() => {
      if (this.verify == 1) {
        this.verify = 0;
      } else {
        this.verify = 1;
      }
      this.change.change(this.win, this.verify, "navegation", "chatwin");
    });
  }

}
