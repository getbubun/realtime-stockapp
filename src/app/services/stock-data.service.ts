import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockQuote } from 'src/app/models/stock-quote';
import { environment } from 'src/environments/environment';
import { timer } from 'rxjs';
import { map, retryWhen, delayWhen } from 'rxjs/operators';
const QueryRetryInterval: number = 30000;

@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  constructor(private _http: HttpClient) {}

  getStockPrice(symbol: string) {
    return this._http
      .get<StockQuote>(
        `${environment.baseUrl}/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${environment.apiKey}`
      )
      .pipe(
        map((response) => {
          let result: StockQuote;
          if (typeof response['Note'] != 'undefined') {
            console.error(response['Note']);
            throw response['Note'];
          } else {
            result = new StockQuote(
              response['Global Quote']['01. symbol'],
              Number(response['Global Quote']['05. price']),
              Number(response['Global Quote']['09. change']),
              response['Global Quote']['10. change percent'],
              Number(response['Global Quote']['06. volume']),
              response['Global Quote']['07. latest trading day'],
              Number(response['Global Quote']['03. high']),
              Number(response['Global Quote']['04. low']),
              true
            );
          }
          return result;
        }),
        retryWhen((errors) =>
          errors.pipe(delayWhen((_) => timer(QueryRetryInterval)))
        )
      );
  }
}
