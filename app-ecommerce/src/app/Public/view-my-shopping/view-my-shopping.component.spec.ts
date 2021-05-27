import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyShoppingComponent } from './view-my-shopping.component';

describe('ViewMyShoppingComponent', () => {
  let component: ViewMyShoppingComponent;
  let fixture: ComponentFixture<ViewMyShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
