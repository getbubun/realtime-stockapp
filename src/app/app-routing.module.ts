import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockContainerComponent } from './components/stock-container/stock-container.component';

const routes: Routes = [
  { path: '', component: StockContainerComponent},   
  { path: 'dashboard', component: StockContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
