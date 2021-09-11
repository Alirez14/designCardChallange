import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title?: string;

  @Input() subTitle?: string;
  @Input() shortDescription?: string;
  @Input() imageUrl?: string;

  isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }


  openDescription() {
    this.isOpen = !this.isOpen;
  }
}
