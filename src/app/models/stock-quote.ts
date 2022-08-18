export class StockQuote {
  constructor(
    symbol: string,
    currPrice: number,
    change: number,
    changePercentage: number,
    volume: number,
    latestTradingDay: string,
    dailyHighPrice: number,
    dailyLowPrice: number,
    isActive: boolean
  ) {
    this.symbol = symbol;
    this.currPrice = currPrice;
    this.change = change;
    this.changePercentage = changePercentage;
    this.volume = volume;
    this.latestTradingDay = latestTradingDay;
    this.dailyHighPrice = dailyHighPrice;
    this.dailyLowPrice = dailyLowPrice;
    this.isActive = isActive;
  }

  symbol: string;
  currPrice: number;
  change: number;
  changePercentage: number;
  volume: number;
  latestTradingDay: string;
  dailyHighPrice: number;
  dailyLowPrice: number;
  isActive: boolean;
}
