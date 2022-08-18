/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockCardToggleComponent } from './stock-card-toggle.component';

describe('StockCardToggleComponent', () => {
  let component: StockCardToggleComponent;
  let fixture: ComponentFixture<StockCardToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCardToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCardToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
