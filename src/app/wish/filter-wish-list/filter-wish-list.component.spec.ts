import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWishListComponent } from './filter-wish-list.component';

describe('FilterWishListComponent', () => {
  let component: FilterWishListComponent;
  let fixture: ComponentFixture<FilterWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterWishListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
