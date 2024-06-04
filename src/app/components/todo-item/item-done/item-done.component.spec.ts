import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDoneComponent } from './item-done.component';

describe('ItemDoneComponent', () => {
  let component: ItemDoneComponent;
  let fixture: ComponentFixture<ItemDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
