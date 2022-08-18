import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Required for AJAX ( fetches ).

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StockContainerComponent } from './components/stock-container/stock-container.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { StockCardToggleComponent } from './components/stock-card-toggle/stock-card-toggle.component';
import { StockDataService } from './services/stock-data.service';


@NgModule({
  declarations: [
    AppComponent,
    StockContainerComponent,
    StockCardComponent,
    StockCardToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [StockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
