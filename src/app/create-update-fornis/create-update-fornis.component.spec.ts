import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateFornisComponent } from './create-update-fornis.component';

describe('CreateUpdateFornisComponent', () => {
  let component: CreateUpdateFornisComponent;
  let fixture: ComponentFixture<CreateUpdateFornisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateFornisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateFornisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
