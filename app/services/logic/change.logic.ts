import { Injectable } from '@angular/core';

@Injectable()

export class ChangeService {

  constructor() { }

    change(win, test, paramx, paramy) {
        if (win < 767) {
            if (test == 1) {
            document.getElementById(paramx).style.display = "initial";
            document.getElementById(paramy).style.display = "none";
            } else {
            document.getElementById(paramx).style.display = "none"
            document.getElementById(paramy).style.display = "initial";
            }
        } else {
            document.getElementById(paramx).style.display = "initial";
            document.getElementById(paramy).style.display = "initial";
        }
    }

}