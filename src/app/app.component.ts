import {Component} from '@angular/core';
import {Card} from "./card/card.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  card?: Card;
  title: string = 'designCardChallenge';

  constructor() {
    this.card = {
      image: 'https://picsum.photos/300/400',
      title: 'TEST',
      subTitle: 'Testing Cool',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur ' +
        'adipisicing elit. Amet, aut cum cumque cupiditate dolorum' +
        ' ducimus eius facilis ipsam libero magnam maxime porro ' +
        'provident quidem rerum, tenetur vel voluptate voluptates?' +
        ' A.Lorem ipsum dolor sit amet, consectetur adipisicing ' +
        'elit. Amet, aut cum cumque cupiditate dolorum ducimus ' +
        'eius facilis ipsam libero magnam maxime porro provident ' +
        'quidem rerum, tenetur vel voluptate voluptates? A.',
    };
  }
}
