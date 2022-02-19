import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '@features/movies/services';
import { Movie } from '@shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.scss']
})
export class HomeMovieComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();
  movies$: Observable<Movie[]> = new Observable();

  constructor(
    private readonly utilsService: UtilsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.getMovieLoadingStatus();
    this.movies$ = this.utilsService.getMovies();
  }

  identify(index: number, movie: Movie) {
    return movie.id;
  }

  getMovieLoadingStatus(): void {
    this.loading$ = this.utilsService.getMovieLoadingStatus()
  }

  navigateMovieDetail(movieId: number): void {
    this.router.navigate(['detail-movie/' + movieId], {
      relativeTo: this.route
    });
  }

}
