import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdatePromoComponent } from './create-update-promo.component';

describe('CreateUpdatePromoComponent', () => {
  let component: CreateUpdatePromoComponent;
  let fixture: ComponentFixture<CreateUpdatePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdatePromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdatePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
