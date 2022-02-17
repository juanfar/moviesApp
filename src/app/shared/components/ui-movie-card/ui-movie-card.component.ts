import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-movie-card',
  templateUrl: './ui-movie-card.component.html',
  styleUrls: ['./ui-movie-card.component.scss']
})
export class UiMovieCardComponent implements OnInit {
  @Input() itemMovie!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
