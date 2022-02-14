import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Actor } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { ConfigService } from '../..';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getActors(): Observable<Actor[]> {
    const endpoint = '/actors';
    return this.http.get<Actor[]>(`${ConfigService.settings.apiUrl}${endpoint}`)
    .pipe(
      retry(2)
    );
  }
}
