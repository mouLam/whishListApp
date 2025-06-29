import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListShowComponent } from './wish-list-show.component';

describe('WishListShowComponent', () => {
  let component: WishListShowComponent;
  let fixture: ComponentFixture<WishListShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishListShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
