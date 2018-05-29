import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class BackService {
  heroesUrl = 'calc/';

  constructor(private http: HttpClient) { }

  calc (obj): Observable<any> {
    const params = {
      amountMin: obj.amountMin,
      selectedNumOfExternalSystems: obj.selectedNumOfExternalSystems,
      selectedNumPowerClients: obj.selectedNumPowerClients,
      power: obj.power
    };
    return this.http.post(this.heroesUrl, params, httpOptions)
    .pipe(
        catchError(this.handleError('getHeroes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
