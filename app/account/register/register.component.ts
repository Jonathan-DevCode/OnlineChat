import { Router } from '@angular/router';
import { PostService } from './../../services/post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name: string;
  room: string;
  password: any;

  constructor(private post: PostService, private router: Router) { }


  getName(event) {
    this.name = event;
  }

  getRoom(event) {
    this.room = event;
  }

  getClick() {
    this.post.addUser(this.name, this.room, this.password)
    .then((data) => {
        switch (data) {
          case 1 : {
            alert("Username already exists");
            break;
          }
          case 2 : {
            this.router.navigate(['/home'])
            break;
          }
          default: {
            alert("All fields must be filled");
            break;
          }
        }
    });
  }

  getPassword(event: KeyboardEvent) {
    this.password = (<HTMLInputElement>event.target).value;
    if(event.keyCode == 13) {
      this.getClick();
    };
  }

}
