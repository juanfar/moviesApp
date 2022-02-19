import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '@shared/models';

@Component({
  selector: 'app-ui-movies-cards-container',
  templateUrl: './ui-movies-cards-container.component.html',
  styleUrls: ['./ui-movies-cards-container.component.scss']
})
export class UiMoviesCardsContainerComponent implements OnInit {
  @Input() movies!: Movie[] | null;
  @Output() clickedCardEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  identify(index: number, item: Movie) {
    return item.id;
  }

  isClicked(movieId: number): void {
    this.clickedCardEvent.emit(movieId);
  }

}
