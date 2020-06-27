import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicviewComponent } from './dynamicview.component';

describe('DynamicviewComponent', () => {
  let component: DynamicviewComponent;
  let fixture: ComponentFixture<DynamicviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
