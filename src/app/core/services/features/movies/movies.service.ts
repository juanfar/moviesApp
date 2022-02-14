import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { ConfigService } from '../../';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    const endpoint = '/movies';
    return this.http.get<Movie[]>(`${ConfigService.settings.apiUrl}${endpoint}`)
    .pipe(
      retry(2)
    );
  }
}
