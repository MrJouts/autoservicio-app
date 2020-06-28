import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSingleComponent } from './producto-single.component';

describe('ProductoSingleComponent', () => {
  let component: ProductoSingleComponent;
  let fixture: ComponentFixture<ProductoSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
