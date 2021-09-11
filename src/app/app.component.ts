import { Component } from '@angular/core';
import { card } from './card/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  card?: card;
  title: string = 'designCardChallenge';
  constructor() {
    this.card ==
      {
        shortDescription: 'Hello this is test',
        title: 'TEST',
        subTitle: 'Testing Cool',
      };
  }
}
