import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateUpdateProductComponent } from './crate-update-product.component';

describe('CrateUpdateProductComponent', () => {
  let component: CrateUpdateProductComponent;
  let fixture: ComponentFixture<CrateUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateUpdateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrateUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
