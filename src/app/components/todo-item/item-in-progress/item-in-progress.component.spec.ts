import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInProgressComponent } from './item-in-progress.component';

describe('ItemInProgressComponent', () => {
  let component: ItemInProgressComponent;
  let fixture: ComponentFixture<ItemInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemInProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
