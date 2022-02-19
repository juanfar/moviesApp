import { Component, OnInit } from '@angular/core';
import { ActorsService, CompaniesService, MoviesService } from '@core/services';
import { Store } from '@ngrx/store';
import { loadActors, loadCompanies, loadMovies } from '@store/actions';
import { selectMoviesLoading } from '@store/selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'moviesApp';

  constructor(
    private store: Store<any>,
    private readonly moviesService: MoviesService,
    private readonly actorsService: ActorsService,
    private readonly companiesService: CompaniesService
  ) { }

  ngOnInit(): void {
    this.createStateData();
  }

  createStateData(): void {
    this.store.dispatch(loadMovies());
    this.store.dispatch(loadActors());
    this.store.dispatch(loadCompanies());
  }
}
