import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StockQuote } from 'src/app/models/stock-quote';

@Component({
  selector: 'stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockCardComponent implements OnInit {
 @Input() stockData: StockQuote;

  constructor() { }

  ngOnInit() {
  }

  cardToggleValueChanged(event) {
    this.stockData.isActive = event;
  }

}
