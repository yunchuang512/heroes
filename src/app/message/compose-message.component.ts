import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'compose-message.component.html',
})

export class ComposeMessageComponent {
  details: string;
  sending = false;

  constructor(private router: Router) {
  }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{outlets: {popup: null}}]);
  }
}
