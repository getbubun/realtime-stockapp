import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { StockQuote } from 'src/app/models/stock-quote';
import { STOCK_SYMBOLS } from 'src/app/models/stockSymbols';
import { from, interval, Observable, Subject } from 'rxjs';
import { takeUntil, mergeMap } from 'rxjs/operators';
import { StockDataService } from 'src/app/services/stock-data.service';
const stockLookupInterval: number = 30000;

@Component({
  selector: 'stock-container',
  templateUrl: './stock-container.component.html',
  styleUrls: ['./stock-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockContainerComponent implements OnInit {
  stockSymbols: string[] = STOCK_SYMBOLS;
  stockListMap: object = {};
  stocksList: StockQuote[] = [];
  timerInterval: Observable<any>;
  ngUnsubscribe = new Subject();

  constructor(
    private _stockDataService: StockDataService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.initializeDefaultValues();
    this.initStockDataPolling();
    this.fetchLiveStockPrices();
  }

  getActiveStocksList() {
    return this.stocksList
      .filter((x: StockQuote) => x.isActive)
      .map((y: StockQuote) => y.symbol);
  }

  private initializeDefaultValues() {
    this.stockSymbols.forEach((symbol, index) => {
      this.stocksList.push(new StockQuote(symbol, 0, 0, 0, 0, '', 0, 0, true));
      this.stockListMap[symbol] = index;
    });
  }

  private fetchLiveStockPrices() {
    from(this.getActiveStocksList())
      .pipe(
        mergeMap((symbol: string) =>
          this._stockDataService.getStockPrice(symbol)
        )
      )
      .subscribe(
        (res) => {
          let idx = this.stockListMap[res.symbol];
          idx > -1 && (this.stocksList[idx] = res);
          this._cdr.detectChanges();
        },
        (err) => console.log('Error loading stock', err)
      );
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  trackStock(index, stock) {
    return this.stocksList ? this.stocksList : undefined;
  }

  initStockDataPolling() {
    if (!this.timerInterval) {
      this.timerInterval = interval(stockLookupInterval);
      this.timerInterval
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((res) => {
          this.fetchLiveStockPrices();
        });
    }
  }
}
