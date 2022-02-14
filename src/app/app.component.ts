import { Component, OnInit } from '@angular/core';
import { ActorsService, CompaniesService, MoviesService } from './core/services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'moviesApp';

  constructor(
    private readonly moviesService: MoviesService,
    private readonly actorsService: ActorsService,
    private readonly companiesService: CompaniesService
  ) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(response => console.log(response));
    this.actorsService.getActors().subscribe(response => console.log(response));
    this.companiesService.getCompanies().subscribe(response => console.log(response));
  }
}
