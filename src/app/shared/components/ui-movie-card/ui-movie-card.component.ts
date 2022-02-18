import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ui-movie-card',
  templateUrl: './ui-movie-card.component.html',
  styleUrls: ['./ui-movie-card.component.scss']
})
export class UiMovieCardComponent implements OnInit {
  @Input() itemMovie!: any;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goToMovie(movieId: number) {
    console.log(movieId);
  }
}
