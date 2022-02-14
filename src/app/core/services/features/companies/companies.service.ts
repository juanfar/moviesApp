import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Company } from 'src/app/shared/models';
import { ConfigService } from '../..';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getCompanies(): Observable<Company[]> {
    const endpoint = '/companies';
    return this.http.get<Company[]>(`${ConfigService.settings.apiUrl}${endpoint}`)
    .pipe(
      retry(2)
    );
  }
}
