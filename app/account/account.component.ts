import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  option: number = 0;

  constructor(){}

  ngOnInit() {
    window.addEventListener("scroll", () => {
      document.getElementById("hover").style.display = "none";
    });
  }

  register() {
    if (this.option == 0) {
      this.option = 1;
    } else {
      this.option = 0;
    };
  }

}
