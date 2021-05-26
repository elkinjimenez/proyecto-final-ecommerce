import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFinallyBuyComponent } from './modal-finally-buy.component';

describe('ModalFinallyBuyComponent', () => {
  let component: ModalFinallyBuyComponent;
  let fixture: ComponentFixture<ModalFinallyBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFinallyBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFinallyBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
