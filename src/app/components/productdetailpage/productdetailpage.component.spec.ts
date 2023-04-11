import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailpageComponent } from './productdetailpage.component';

describe('ProductdetailpageComponent', () => {
  let component: ProductdetailpageComponent;
  let fixture: ComponentFixture<ProductdetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
