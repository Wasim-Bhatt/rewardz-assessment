import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatagoriesComponent } from './product-catagories.component';

describe('ProductCatagoriesComponent', () => {
  let component: ProductCatagoriesComponent;
  let fixture: ComponentFixture<ProductCatagoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCatagoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
