import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFornisComponent } from './list-fornis.component';

describe('ListFornisComponent', () => {
  let component: ListFornisComponent;
  let fixture: ComponentFixture<ListFornisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFornisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFornisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
