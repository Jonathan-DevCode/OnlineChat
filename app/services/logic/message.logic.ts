import { Injectable } from '@angular/core';

@Injectable()

export class MessageService {

  constructor() { }

  wipeMessages(): void {
    document.getElementById("message-board").innerHTML = "";
  }

  constructMessages(element, current): any {
    if (element.name == current.name) {
        document.getElementById("message-board").insertAdjacentHTML("beforeend",
        `
          <div class="p-2 m-2 ml-5 float-right" style="background-color: #eeeeee;">
            <p class="m-0 text-success"><small> ${element.name} </small></p>
            <p class="m-0 mr-2"> ${element.message} </p> 
            <p class="m-0 text-right" id="date"><small> 30/06/2020 </small></p>
          </div>
        `
        )
    } else {
        document.getElementById("message-board").insertAdjacentHTML("beforeend",
          `
            <div class="p-2 m-2 mr-5 float-left bg-white">
              <p class="m-0 text-primary"><small> ${element.name} </small></p>
              <p class="m-0 mr-2"> ${element.message} </p> 
              <p class="m-0 text-left" id="date"><small> 30/06/2020 </small></p>
            </div>
          `
        )
    }
  }

}