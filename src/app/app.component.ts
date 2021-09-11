import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { Card } from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  card?: Card;
  title: string = 'designCardChallenge';
  rand = Math.floor((Math.random() * 100) % 25) + 30;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    forkJoin([this.loadCard(this.rand), this.loadPhoto(this.rand)]).subscribe(
      ([card, photo]: any) => {
        this.card = {
          image: photo.url,
          title: card.title,
          subTitle: '',
          shortDescription: card.body + card.body,
        };
      }
    );
  }

  loadCard(id: number) {
    const urlPost = 'https://jsonplaceholder.typicode.com/posts/';

    return this.http.get(urlPost + id);
  }
  loadPhoto(id: number) {
    const urlPost = 'https://jsonplaceholder.typicode.com/photos/';

    return this.http.get(urlPost + id);
  }
}
