import { Component, Input, OnInit } from '@angular/core';
import { card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardData?: card;
  

  constructor() {}

  ngOnInit(): void {}
}
