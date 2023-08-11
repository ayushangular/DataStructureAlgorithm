import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOperationComponent } from './array-operation.component';

describe('ArrayOperationComponent', () => {
  let component: ArrayOperationComponent;
  let fixture: ComponentFixture<ArrayOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
