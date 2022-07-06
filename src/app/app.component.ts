import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  open(open: any) {
    throw new Error('Method not implemented.');
  }
  title = 'reg-app';
}
