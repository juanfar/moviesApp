import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

import { throwError } from 'rxjs';
import { AppConfig } from '../../models/config.model';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    static settings: AppConfig;

    constructor(private readonly http: HttpClient) { }

    loadConfig(): Promise<AppConfig> {
        const jsonFile = `assets/config/config.${environment.name}.json`;
        return this.http.get<AppConfig>(jsonFile).pipe(
            tap(resp => ConfigService.settings = resp),
            catchError(e => throwError(`Could not load file '${jsonFile}': ${JSON.stringify(e)}`))
        ).toPromise()
    }
}