import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@shared/models';

@Component({
  selector: 'app-ui-movies-cards-container',
  templateUrl: './ui-movies-cards-container.component.html',
  styleUrls: ['./ui-movies-cards-container.component.scss']
})
export class UiMoviesCardsContainerComponent implements OnInit {
  @Input() movies!: Movie[] | null;

  constructor() { }

  ngOnInit(): void {
  }

  identify(index: number, item: Movie) {
    return item.id;
  }

}
