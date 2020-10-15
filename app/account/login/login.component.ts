import { Router } from '@angular/router';
import { PostService } from './../../services/post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  name: string;
  password: string;

  constructor(private post: PostService, private router: Router) { }

  getName(event) {
    this.name = event;
  }
  
  getClick() {
    this.post.authenticate(this.name, this.password).then((response) => {
      switch (response) {
        case 2 : {
          alert("Incorrect Password");
          break
        }
        case 3 : {
          alert("UserName Not Found");
          break
        }
        case 4 : {
          alert("Unexpected Error")
        }
        default : {
          let ls = JSON.stringify({
            name: response.name,
            room: response.room
          });
          
          localStorage.setItem('CurrentUser', ls)
          this.router.navigate(['/home'])
          break
        }
      }
    });
  }

  getPassword(event) {
    this.password = (<HTMLInputElement>event.target).value;
    if(event.keyCode == 13) {
      this.getClick();
    };
  }

}
