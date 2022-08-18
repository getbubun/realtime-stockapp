import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'stock-card-toggle',
  templateUrl: './stock-card-toggle.component.html',
  styleUrls: ['./stock-card-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockCardToggleComponent {

  @Input() toggleStatus:boolean = false;
  @Output() onToggleChange = new EventEmitter();

  constructor() { }

}
